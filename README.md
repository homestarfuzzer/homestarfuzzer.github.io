# homestarfuzzer.github.io

Personal security research blog — CTF writeups, vulnerability research, and notes.  
Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

---

## Prerequisites

Development happens inside a **Dev Container** (VS Code + Docker). You don't need Ruby installed locally.

**Required:**
- [VS Code](https://code.visualstudio.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or any Docker daemon)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code

---

## Local Development

### 1. Open in Dev Container

Open this folder in VS Code, then:

- Press `Ctrl+Shift+P` → **Dev Containers: Reopen in Container**  
- Wait for the container to build and `bundle install` to finish (~2 min first time)

### 2. Serve the site locally

In the container terminal:

```bash
bundle exec jekyll serve --livereload
```

Open **http://localhost:4000** in your browser. The site hot-reloads when you save files.

> Port 4000 is forwarded automatically by the Dev Container and may open in your browser automatically.

### Stop the server

Press `Ctrl+C` in the terminal.

---

## Site Structure

```
.
├── _config.yml          ← Site settings (title, author, URL, plugins)
├── Gemfile              ← Ruby dependencies
│
├── _layouts/            ← Page templates
│   ├── default.html     ← Base HTML wrapper
│   ├── post.html        ← Blog post layout
│   ├── writeup.html     ← CTF / research writeup layout
│   └── page.html        ← Static page layout
│
├── _includes/           ← Reusable HTML snippets
│   ├── header.html
│   ├── footer.html
│   ├── post-list.html   ← Card grid component
│   └── icons/           ← SVG icons
│
├── _posts/              ← Blog posts (Markdown)
├── _writeups/           ← CTF writeups / research (Markdown)
│
├── assets/
│   ├── css/main.css     ← All styles
│   ├── css/syntax.css   ← Code syntax highlighting
│   ├── js/main.js       ← Minimal JavaScript
│   └── img/             ← Images
│
├── index.html           ← Homepage
├── about.md             ← About page
├── 404.html             ← 404 page
├── blog/index.html      ← Paginated blog listing
└── writeups/index.html  ← Writeups listing
```

---

## Writing Content

### Adding a Blog Post

Create a new file in `_posts/` named `YYYY-MM-DD-your-title.md`:

```bash
touch _posts/2026-04-01-my-new-post.md
```

Paste this front matter at the top, then write your content in Markdown below:

```yaml
---
layout: post
title: "My Post Title"
date: 2026-04-01
category: Research          # optional label shown on card
tags: [web, xss, bugbounty] # optional — shown as chips
description: "One-sentence summary shown in cards and SEO."
read_time: 5                # optional — approx minutes
---

Your content here...
```

### Adding a CTF Writeup

Create a file in `_writeups/` named `YYYY-MM-DD-ctf-name-challenge.md`:

```bash
touch _writeups/2026-04-01-htb-machinename.md
```

```yaml
---
layout: writeup
title: "Hack The Box — MachineName"
date: 2026-04-01
category: HackTheBox         # HackTheBox | TryHackMe | CTF | Research
difficulty: Medium           # Easy | Medium | Hard | Insane
ctf: HackTheBox              # shown as "CTF — HackTheBox" on the card
tags: [linux, privesc, sqli]
tools: [nmap, sqlmap, john]
description: "Brief summary of the machine."
---

## Enumeration

...
```

### Markdown Tips

- Code blocks: use triple backticks with a language name for syntax highlighting  
  ` ```bash `, ` ```python `, ` ```c `, etc.
- Images: put them in `assets/img/` and reference as `![alt](/assets/img/screenshot.png)`
- Blockquotes work well for challenge descriptions: `> Challenge text here`

---

## Updating Your Profile

Edit `_config.yml` to update:

```yaml
author:
  name: Your Name
  handle: yourusername
  bio: "One-liner bio shown on the About page."
  github: yourgithubhandle
  twitter: yourtwitter      # leave blank to hide
  linkedin: yourlinkedin    # leave blank to hide
```

Edit `about.md` to update your full About page content and skills.

---

## Deployment (GitHub Pages)

### Automatic deployment

Every push to the `main` branch triggers GitHub Pages to rebuild and deploy automatically.

```bash
git add .
git commit -m "add writeup: HTB MachineName"
git push origin main
```

Your site will be live at `https://homestarfuzzer.github.io` within ~60 seconds.

### First-time GitHub Pages setup

1. Go to your repository on GitHub → **Settings** → **Pages**
2. Under **Source**, select **Branch: main** and folder **/ (root)**
3. Click **Save**

GitHub Pages uses the `github-pages` gem (which this site already uses) — no extra configuration needed.

---

## Dependency Management

Dependencies are pinned via `Gemfile.lock`. To update all gems to their latest compatible versions:

```bash
bundle update
```

Then commit the updated `Gemfile.lock`:

```bash
git add Gemfile.lock
git commit -m "chore: update gems"
```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Site not building | Run `bundle exec jekyll build --trace` for detailed errors |
| Port 4000 already in use | `bundle exec jekyll serve --port 4001` |
| Writeup not showing | Check the filename starts with a date: `YYYY-MM-DD-name.md` |
| Styles not loading locally | Make sure `url` in `_config.yml` is not overriding relative paths |
| Gem install errors in container | Run `bundle install` again; check Ruby version with `ruby -v` |

---

## License

Content (posts, writeups) is © Austin McNett. Code/theme is MIT licensed — feel free to fork and adapt.
