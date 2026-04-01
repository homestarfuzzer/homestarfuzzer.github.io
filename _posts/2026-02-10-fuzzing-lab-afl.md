---
layout: post
title: "Setting Up a Fuzzing Lab with AFL++ and Docker"
date: 2026-02-10
category: Tools
tags: [fuzzing, afl++, docker, automation]
description: >
  How I set up a reproducible fuzzing environment using AFL++ inside Docker,
  with corpus minimization and crash triage baked in.
read_time: 8
---

Fuzzing is one of the highest-leverage things you can do to find bugs in software
you don't have source access to — and even in software you do. Here's the lab
setup I've settled on after a lot of trial and error.

## Why Docker?

Fuzzing writes a *lot* of files, thrashes disk I/O, and can destabilize the host
if you're not careful. Containerizing it keeps things isolated and reproducible.

## Dockerfile

```dockerfile
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    build-essential clang llvm lld \
    git cmake ninja-build \
    python3 python3-pip \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Build AFL++ from source for the latest features
RUN git clone https://github.com/AFLplusplus/AFLplusplus /opt/aflplusplus \
    && cd /opt/aflplusplus \
    && make distrib \
    && make install

WORKDIR /fuzz
```

Build and run:

```bash
docker build -t fuzzer .
docker run -it --privileged fuzzer
```

The `--privileged` flag lets AFL++ set CPU affinity and disable ASLR inside
the container.

## Compiling the Target

Use `afl-clang-fast` for best performance (LLVM-based instrumentation):

```bash
CC=afl-clang-fast CXX=afl-clang-fast++ ./configure --disable-shared
make -j$(nproc)
```

## Running the Fuzzer

```bash
mkdir -p corpus/in corpus/out

# Seed corpus — small valid inputs
echo "test" > corpus/in/seed1

afl-fuzz \
  -i corpus/in \
  -o corpus/out \
  -m none \
  -- ./target_binary @@
```

## Corpus Minimization

After a run, minimize the corpus to reduce redundancy before the next session:

```bash
afl-cmin -i corpus/out/default/queue \
         -o corpus/minimized \
         -- ./target_binary @@
```

## Triage with afl-collect + GDB

When crashes are found, triage them:

```bash
for f in corpus/out/default/crashes/id*; do
  echo "--- $f ---"
  ./target_binary "$f" 2>&1 | head -5
done
```

For a quick root cause:

```bash
gdb -batch -ex "run < crash_input" -ex "bt" ./target_binary
```

## Key Tips

- **Core pattern**: Set `/proc/sys/kernel/core_pattern` to `core` before fuzzing
- **Persistent mode**: Use AFL's persistent mode for single-process targets — 10–100× faster
- **Sanitizers**: Build with `AddressSanitizer` to catch more bugs: `CFLAGS="-fsanitize=address"`
