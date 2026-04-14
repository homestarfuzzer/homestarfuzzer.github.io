---
layout: page
title: About
description: Austin McNett - SOC analyst, CTF player, perpetual learner.
permalink: /about/
---

<style>
/* ── Blinking cursor ───────────────────────────────────────────── */
@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
.cursor { animation: blink 1.1s step-start infinite; font-family: var(--font-mono); color: var(--color-accent); }

/* ── Accordion ─────────────────────────────────────────────────── */
details {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  margin-bottom: 0.6rem;
  transition: border-color 250ms ease;
}
details:hover { border-color: var(--color-hover); }
details[open] { border-color: var(--color-accent); }

summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  cursor: pointer;
  list-style: none;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-accent);
  user-select: none;
}
summary::-webkit-details-marker { display: none; }

.summary__label { letter-spacing: 0.04em; }

.summary__chevron {
  font-size: 0.7rem;
  color: var(--color-text-muted);
  transition: transform 250ms ease;
}
details[open] .summary__chevron { transform: rotate(180deg); }

.accordion__body {
  padding: 0.25rem 1rem 0.9rem 1rem;
  border-top: 1px solid var(--color-border);
}

/* ── Accordion list items ──────────────────────────────────────── */
.accordion__body ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.accordion__body ul li {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  gap: 0.75rem;
  align-items: baseline;
}
.accordion__body ul li:last-child { border-bottom: none; }

.li__label {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  min-width: 120px;
  flex-shrink: 0;
}

/* ── SPL block ─────────────────────────────────────────────────── */
.spl-block {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  background: var(--color-surface, rgba(255,255,255,0.03));
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.65rem 0.9rem;
  color: var(--color-text-muted);
  margin-top: 0.5rem;
  white-space: pre-wrap;
  word-break: break-all;
}

/* ── Tools built ───────────────────────────────────────────────── */
.tool-row {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  align-items: baseline;
}
.tool-row:last-child { border-bottom: none; }
.tool-row__name {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-accent);
  min-width: 130px;
  flex-shrink: 0;
}
.tool-row__name a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dashed var(--color-accent);
}
.tool-row__name a:hover { border-bottom-style: solid; }
.tool-row__desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
}
</style>

<div style="max-width:720px">

<!-- ─── Identity ─────────────────────────────────────────────────── -->
<p class="hero__handle">
  <span class="hero__handle-prefix">$ whoami&nbsp;&nbsp;&#8594;&nbsp;&nbsp;</span>homestarfuzzer
</p>
<p style="color:var(--color-text-muted);font-size:1.05rem;line-height:1.75;margin-bottom:2.5rem">
  SOC analyst by day — fully remote, four environments, always on. I spend my time triaging alerts, writing SPL, and figuring out why something fired before it becomes someone else's problem. Outside of that I'm studying offensive security, grinding CTFs, doing independent hardware research, and building tools that scratch itches. Writing about what sticks.
</p>

<!-- ─── Day to Day ────────────────────────────────────────────────── -->
<div class="section-header" style="margin-bottom:0.75rem">
  <span class="section-title">Day to Day</span>
</div>

<div style="margin-bottom:2.5rem">
  <div style="display:flex;gap:1.25rem;padding:0.65rem 0;border-bottom:1px solid var(--color-border);align-items:baseline">
    <span style="font-family:var(--font-mono);color:var(--color-accent);min-width:170px;font-size:0.85rem;flex-shrink:0">Environment Coverage</span>
    <span style="color:var(--color-text-muted);font-size:0.95rem">monitor and triage 4 active environments, rotating every ~15 min to maintain SLA/SLO compliance</span>
  </div>
  <div style="display:flex;gap:1.25rem;padding:0.65rem 0;border-bottom:1px solid var(--color-border);align-items:baseline">
    <span style="font-family:var(--font-mono);color:var(--color-accent);min-width:170px;font-size:0.85rem;flex-shrink:0">Escalation</span>
    <span style="color:var(--color-text-muted);font-size:0.95rem">route unexpected behavior to T2 via RegScale, SharePoint, or SIR depending on the environment</span>
  </div>
  <div style="display:flex;gap:1.25rem;padding:0.65rem 0;border-bottom:1px solid var(--color-border);align-items:baseline">
    <span style="font-family:var(--font-mono);color:var(--color-accent);min-width:170px;font-size:0.85rem;flex-shrink:0">IOC Analysis</span>
    <span style="color:var(--color-text-muted);font-size:0.95rem">CrowdStrike Falcon — host telemetry, command history, IOC correlation, process graph investigation</span>
  </div>
  <div style="display:flex;gap:1.25rem;padding:0.65rem 0;border-bottom:1px solid var(--color-border);align-items:baseline">
    <span style="font-family:var(--font-mono);color:var(--color-accent);min-width:170px;font-size:0.85rem;flex-shrink:0">Query Writing</span>
    <span style="color:var(--color-text-muted);font-size:0.95rem">SPL in Splunk ES, regularly — pivoting on users, hosts, targets, processes to reconstruct activity</span>
  </div>
  <div style="display:flex;gap:1.25rem;padding:0.65rem 0;align-items:baseline">
    <span style="font-family:var(--font-mono);color:var(--color-accent);min-width:170px;font-size:0.85rem;flex-shrink:0">Tuning</span>
    <span style="color:var(--color-text-muted);font-size:0.95rem">flag repetitive alerts and false positives, recommend detection adjustments to reduce noise</span>
  </div>
</div>

<!-- ─── Skills (accordion) ────────────────────────────────────────── -->
<div class="section-header" style="margin-bottom:0.75rem">
  <span class="section-title">Skills</span>
</div>

<div style="margin-bottom:2.5rem">

  <details open>
    <summary>
      <span class="summary__label">Defensive</span>
      <span class="summary__chevron">▼</span>
    </summary>
    <div class="accordion__body">
      <ul>
        <li><span class="li__label">SIEM</span> Splunk ES — alert triage, SPL query writing, dashboard investigation</li>
        <li><span class="li__label">EDR</span> CrowdStrike Falcon — host analysis, process trees, IOC hunting, graph pivoting</li>
        <li><span class="li__label">Detection</span> alert tuning, false positive reduction, escalation criteria</li>
        <li><span class="li__label">Case Mgmt</span> RegScale, SharePoint/SIR — escalation workflows across multi-environment SOC</li>
        <li><span class="li__label">IR</span> incident scoping, containment recommendations, timeline reconstruction</li>
      </ul>
      <div class="spl-block">&#x2F;&#x2F; typical SPL pattern
index=windows source="WinEventLog:Security" EventCode=4688
| stats count by user, host, parent_process, process_name
| where count &lt; 3
| sort - count</div>
    </div>
  </details>

  <details>
    <summary>
      <span class="summary__label">Offensive</span>
      <span class="summary__chevron">▼</span>
    </summary>
    <div class="accordion__body">
      <ul>
        <li><span class="li__label">Web</span> SQLi, XSS, auth bypass, API abuse — PortSwigger labs, HTB web challenges</li>
        <li><span class="li__label">Network</span> enumeration, service exploitation — nmap, Metasploit, Impacket</li>
        <li><span class="li__label">PrivEsc</span> Windows and Linux privilege escalation — WinPEAS, LinPEAS, manual review</li>
        <li><span class="li__label">OSINT</span> passive recon, target profiling, face-matching workflows</li>
        <li><span class="li__label">Hardware</span> BLE research — nRF52840, GATT enumeration, firmware flashing, passive sniffing</li>
        <li><span class="li__label">Certs</span> Security+, PenTest+</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <span class="summary__label">Tools & Platforms</span>
      <span class="summary__chevron">▼</span>
    </summary>
    <div class="accordion__body">
      <ul>
        <li><span class="li__label">Splunk ES</span> primary SIEM — SPL, correlation searches, dashboards</li>
        <li><span class="li__label">CrowdStrike</span> Falcon EDR — daily driver for host investigation</li>
        <li><span class="li__label">Burp Suite</span> web app testing, intercepting proxy</li>
        <li><span class="li__label">Nmap</span> network discovery, service enumeration</li>
        <li><span class="li__label">Metasploit</span> exploitation framework, Meterpreter post-ex</li>
        <li><span class="li__label">Impacket</span> Windows protocol tooling — mssqlclient, secretsdump</li>
        <li><span class="li__label">Wireshark</span> packet capture and protocol analysis</li>
        <li><span class="li__label">HTB / THM</span> active lab platforms for skill development</li>
      </ul>
    </div>
  </details>

</div>

<!-- ─── Tools I've Built ──────────────────────────────────────────── -->
<div class="section-header" style="margin-bottom:0.75rem">
  <span class="section-title">Things I've Built</span>
</div>

<div style="margin-bottom:2.5rem">

  <details open>
    <summary>
      <span class="summary__label">Tools & Projects</span>
      <span class="summary__chevron">▼</span>
    </summary>
    <div class="accordion__body">
      <div class="tool-row">
        <span class="tool-row__name"><a href="https://github.com/homestarfuzzer/iocinfo">iocinfo</a></span>
        <span class="tool-row__desc">CLI IOC enrichment — queries VirusTotal, AbuseIPDB, Shodan, and free sources in one view</span>
      </div>
      <div class="tool-row">
        <span class="tool-row__name"><a href="https://github.com/homestarfuzzer/BYOB">BYOB</a></span>
        <span class="tool-row__desc">one-click vulnerable lab launcher — 12+ targets (web, API, network, CTF) via local Docker dashboard</span>
      </div>
      <div class="tool-row">
        <span class="tool-row__name"><a href="https://homestarfuzzer.github.io/nmapguide/">nmapguide</a></span>
        <span class="tool-row__desc">interactive nmap command builder — 9 sections, 34+ playbook commands, NSE browser, rustscan tab</span>
      </div>
    </div>
  </details>

</div>

<!-- ─── Now ───────────────────────────────────────────────────────── -->
<div class="section-header" style="margin-bottom:0.75rem">
  <span class="section-title">now</span>
</div>

<div class="toc" style="margin-bottom:2.5rem">
  <div style="font-family:var(--font-mono);font-size:0.82rem;color:var(--color-text-muted);margin-bottom:0.85rem;letter-spacing:0.04em">
    status <span style="color:var(--color-accent)">&#9679;</span> active
  </div>
  <div style="display:flex;flex-direction:column;gap:0.55rem">
    <p style="font-family:var(--font-mono);font-size:0.88rem;margin:0">
      <span style="color:var(--color-accent);margin-right:0.6rem">&gt;</span>
      <span style="color:var(--color-text)">grinding HTB — active machines and season challenges</span>
    </p>
    <p style="font-family:var(--font-mono);font-size:0.88rem;margin:0">
      <span style="color:var(--color-accent);margin-right:0.6rem">&gt;</span>
      <span style="color:var(--color-text)">BLE hardware research — nRF52840, GATT enumeration</span>
    </p>
    <p style="font-family:var(--font-mono);font-size:0.88rem;margin:0">
      <span style="color:var(--color-accent);margin-right:0.6rem">&gt;</span>
      <span style="color:var(--color-text)">organizing RVAsec Deep Dives monthly</span><span class="cursor">_</span>
    </p>
  </div>
</div>

<!-- ─── Contact ───────────────────────────────────────────────────── -->
<div class="section-header" style="margin-bottom:0.75rem">
  <span class="section-title">Contact</span>
</div>

<a class="btn btn--ghost" href="https://linkedin.com/in/austinmcnett" style="font-family:var(--font-mono);font-size:0.9rem">
  $ linkedin.com/in/austinmcnett
</a>

</div>
