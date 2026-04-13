---
layout: page
title: About
description: Austin McNett - SOC analyst, CTF player, perpetual learner.
permalink: /about/
---

<style>
.skill-card { transition: border-color 250ms ease; }
.skill-card:hover { border-color: var(--color-hover); }
@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
.cursor { animation: blink 1.1s step-start infinite; font-family: var(--font-mono); color: var(--color-accent); }
</style>

<div style="max-width:720px">

<!-- ─── Identity ─────────────────────────────────────────────────── -->
<p class="hero__eyebrow">// session init</p>
<p class="hero__handle">
  <span class="hero__handle-prefix">$ whoami&nbsp;&nbsp;&#8594;&nbsp;&nbsp;</span>homestarfuzzer
</p>
<p style="color:var(--color-text-muted);font-size:1.05rem;line-height:1.75;margin-bottom:2.5rem">
  SOC analyst by day. I triage alerts, tune detections, and respond to incidents.
  Outside of that I'm studying offensive security, grinding CTFs, and writing about what sticks.
</p>

<!-- ─── What I Do ─────────────────────────────────────────────────── -->
<div class="section-header" style="margin-bottom:0.75rem">
  <span class="section-title">What I Do</span>
</div>

<div style="margin-bottom:2.5rem">
  <div style="display:flex;gap:1.25rem;padding:0.65rem 0;border-bottom:1px solid var(--color-border);align-items:baseline">
    <span style="font-family:var(--font-mono);color:var(--color-accent);min-width:170px;font-size:0.85rem;flex-shrink:0">SOC Analysis</span>
    <span style="color:var(--color-text-muted);font-size:0.95rem">alert triage, detection engineering, incident response</span>
  </div>
  <div style="display:flex;gap:1.25rem;padding:0.65rem 0;border-bottom:1px solid var(--color-border);align-items:baseline">
    <span style="font-family:var(--font-mono);color:var(--color-accent);min-width:170px;font-size:0.85rem;flex-shrink:0">CTF Competitions</span>
    <span style="color:var(--color-text-muted);font-size:0.95rem">mostly web, pwn, and crypto</span>
  </div>
  <div style="display:flex;gap:1.25rem;padding:0.65rem 0;border-bottom:1px solid var(--color-border);align-items:baseline">
    <span style="font-family:var(--font-mono);color:var(--color-accent);min-width:170px;font-size:0.85rem;flex-shrink:0">Offensive Security</span>
    <span style="color:var(--color-text-muted);font-size:0.95rem">actively studying and labbing</span>
  </div>
  <div style="display:flex;gap:1.25rem;padding:0.65rem 0;align-items:baseline">
    <span style="font-family:var(--font-mono);color:var(--color-accent);min-width:170px;font-size:0.85rem;flex-shrink:0">Certifications</span>
    <span style="color:var(--color-text-muted);font-size:0.95rem">Security+, PenTest+</span>
  </div>
</div>

<!-- ─── Skills ────────────────────────────────────────────────────── -->
<div class="section-header" style="margin-bottom:0.75rem">
  <span class="section-title">Skills</span>
</div>

<div class="skills-grid" style="margin-bottom:2.5rem">
  <div class="skill-card">
    <span class="skill-card__label" style="color:var(--color-accent)">Offensive</span>
    <ul class="skill-card__items">
      <li>Web App Pentesting</li>
      <li>Network Exploitation</li>
      <li>Reverse Engineering</li>
    </ul>
  </div>
  <div class="skill-card">
    <span class="skill-card__label" style="color:var(--color-accent)">Defensive</span>
    <ul class="skill-card__items">
      <li>SIEM</li>
      <li>Alert Triage</li>
      <li>Detection Engineering</li>
      <li>Incident Response</li>
    </ul>
  </div>
  <div class="skill-card">
    <span class="skill-card__label" style="color:var(--color-accent)">Tools</span>
    <ul class="skill-card__items">
      <li>Splunk ES</li>
      <li>CrowdStrike Falcon</li>
      <li>Nmap</li>
      <li>Burp Suite</li>
    </ul>
  </div>
  <div class="skill-card">
    <span class="skill-card__label" style="color:var(--color-accent)">Platforms</span>
    <ul class="skill-card__items">
      <li>HackTheBox</li>
      <li>TryHackMe</li>
      <li>PortSwigger</li>
    </ul>
  </div>
</div>

<!-- ─── Now ───────────────────────────────────────────────────────── -->
<div class="section-header" style="margin-bottom:0.75rem">
  <span class="section-title">// now</span>
</div>

<div class="toc" style="margin-bottom:2.5rem">
  <div style="font-family:var(--font-mono);font-size:0.82rem;color:var(--color-text-muted);margin-bottom:0.85rem;letter-spacing:0.04em">
    status <span style="color:var(--color-accent)">&#9679;</span> active
  </div>
  <div style="display:flex;flex-direction:column;gap:0.55rem">
    <p style="font-family:var(--font-mono);font-size:0.88rem;margin:0">
      <span style="color:var(--color-accent);margin-right:0.6rem">&gt;</span>
      <span style="color:var(--color-text)">studying for OSCP</span>
    </p>
    <p style="font-family:var(--font-mono);font-size:0.88rem;margin:0">
      <span style="color:var(--color-accent);margin-right:0.6rem">&gt;</span>
      <span style="color:var(--color-text)">grinding HTB Pro Labs + THM paths</span>
    </p>
    <p style="font-family:var(--font-mono);font-size:0.88rem;margin:0">
      <span style="color:var(--color-accent);margin-right:0.6rem">&gt;</span>
      <span style="color:var(--color-text)">building EZ-SOC — a Splunk-like SIEM training lab</span><span class="cursor">_</span>
    </p>
  </div>
</div>

<!-- ─── Contact ───────────────────────────────────────────────────── -->
<div class="section-header" style="margin-bottom:0.75rem">
  <span class="section-title">Contact</span>
</div>

<p class="hero__eyebrow" style="margin-bottom:0.85rem">// reach me via:</p>
<a class="btn btn--ghost" href="https://github.com/homestarfuzzer" style="font-family:var(--font-mono);font-size:0.9rem">
  $ github.com/homestarfuzzer
</a>

</div>
