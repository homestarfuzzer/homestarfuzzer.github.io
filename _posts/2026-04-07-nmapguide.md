---
layout: post
title: "I Built an Interactive Nmap Command Builder So You Can Stop Guessing at Flags"
date: 2026-04-07
category: Tools
tags: [tools]
description: >
  nmapguide is a browser-based nmap command builder and reference tool.
  Pick your options through a guided interface, watch the command build live, copy it, and go.
read_time: 4
---

Every pentester has a phase early on where nmap feels like a slot machine. You know the tool does what you need. You're not sure which combination of flags gets you there. So you Google it, find a cheatsheet, copy something that looks close, tweak it until it stops erroring, and move on — never really knowing why it worked.

That gets old fast. And cheatsheets don't explain anything.

So I built a tool that does.

## What it does

nmapguide walks you through an nmap command section by section — Host Discovery, Scan Technique, Port Scope, Service/Version, OS Detection, Timing, Evasion, Output, NSE Scripts — in the exact order the man page covers them. Pick options, watch the command build live, copy it when it looks right.

Every option has a hover description pulled from the man page. Every section links directly to the relevant nmap docs. You're not just getting a command — you're learning what each piece does.

```bash
# Example: what nmapguide might build you
nmap -sS -p 1-1024 -sV --version-intensity 5 -O -T3 -oN output.txt 10.10.10.5
```

Target input validates in real time — red while incomplete, amber when valid, ready to copy.

---

## The Playbook

This is the part I use most on actual engagements.

34+ real-world commands organized by use case: CTF, recon, stealth, web, SMB, services, firewall evasion, vuln scanning. Enter your target once at the top and every command auto-fills. No copy-paste surgery on IPs.

```bash
# Full TCP SYN scan with service/version + OS detection
nmap -sS -p- -sV -O --osscan-guess -T4 <TARGET>

# Stealth fragmented scan with decoys
nmap -sS -f -D RND:10 --source-port 53 -T2 <TARGET>

# SMB enumeration
nmap -p 445 --script smb-enum-shares,smb-enum-users,smb-os-discovery <TARGET>

# Web recon
nmap -p 80,443,8080,8443 -sV --script http-title,http-headers,http-methods <TARGET>

# Firewall evasion + badsum probe
nmap -sA --badsum --ttl 64 --data-length 25 -T2 <TARGET>
```

Plug in your target, hit copy, run it.

---

## NSE script browser

The NSE browser covers 100+ scripts across 13 categories — auth, brute, default, discovery, exploit, vuln, safe, http, smb, ssh, ssl, dns — with full descriptions and global search. If you've ever typed `--script` and then stared at the screen, this is for you.

```bash
nmap --script vuln <TARGET>
nmap --script ssl-heartbleed -p 443 <TARGET>
nmap --script http-sql-injection <TARGET>
nmap --script ssh-brute -p 22 <TARGET>
```

---

## rustscan tab

If you're using rustscan for initial port discovery before handing off to nmap, there's a tab for that. Build your command in the nmap interface, switch to the rustscan tab, and it converts your flags automatically.

```bash
# nmap flags you built
-sV -p 22,80,443 --script http-title

# Converted rustscan equivalent
rustscan -a <target> -r 22,80,443 -- -sV --script http-title
```

---

## What's covered

| Section | Options |
|---|---|
| Host Discovery | -Pn, -sn, -PS, -PA, -PU, -PE, -PP, -PM, -PR, -n, -R |
| Scan Technique | -sS, -sT, -sU, -sA, -sW, -sM, -sN, -sF, -sX |
| Port Scope | -p-, -F, custom range, --top-ports, --open, --exclude-ports |
| Service/Version | -sV, -A, --version-intensity 0/5/9, --version-light, --version-all |
| OS Detection | -O, --osscan-guess, --osscan-limit |
| Timing | -T0–T5, --min-rate, --max-rate, --min-parallelism, --max-retries, --host-timeout |
| Evasion | -f, -f -f, -D RND:N, --source-port, --data-length, --randomize-hosts, --badsum, --ttl, --spoof-mac |
| Output | -v, -vv, -d, --reason, --packet-trace, -oN, -oX, -oG, -oA |
| NSE Scripts | 100+ scripts, 13 categories, full descriptions, global search |

Multi-select where nmap allows it (ping methods, output flags, evasion). Exclusive groups where it doesn't (timing templates, TCP scan techniques). The tool knows the difference so you don't have to.

---

## Zero setup

Single HTML file. No dependencies. No build step.

```bash
git clone https://github.com/homestarfuzzer/nmapguide.git
```

Open `index.html` in a browser. Or just use it at [homestarfuzzer.github.io/nmapguide](https://homestarfuzzer.github.io/nmapguide/).

---

## Extending it

Adding a section is a one-step edit to the `SECS` array in `index.html`. Adding a playbook command is a one-line entry in the `PLAYBOOK` array with a `<TARGET>` placeholder. `buildCommand()` picks everything up automatically.

## Repo

[github.com/homestarfuzzer/nmapguide](https://github.com/homestarfuzzer/nmapguide)
