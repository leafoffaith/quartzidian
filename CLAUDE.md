# Quartz Project - LeafofFaith's Headspace

## Overview
This is a Quartz v4 static site (digital garden) deployed on Cloudflare Pages. The repo is at `github.com/leafoffaith/quartzidian` on branch `v4`.

## Architecture
- **Static site generator**: Quartz v4 (built on top of Hugo concepts, uses Preact for components)
- **Content source**: Obsidian vault (markdown files in `content/`)
- **Deployment**: Cloudflare Pages (auto-builds on push to `v4`)
- **Branch**: `v4` is the working branch, `main` is the base

## Theme (copied from jzhao.xyz)
- **Header font**: DM Serif Display (weight 400, Google Fonts)
- **Body font**: Bricolage Grotesque (Google Fonts)
- **Code font**: JetBrains Mono (Google Fonts)
- **Date/meta font**: Biro Script Standard US (self-hosted in `quartz/static/font/`)
- **Color scheme**: Custom light (#fffdfa base) and dark (#0c0f14 base) modes

## Key Files
- `quartz.config.ts` - Main config (fonts, colors, plugins, locale)
- `quartz.layout.ts` - Page layout (sidebar components, content layout)
- `quartz/styles/custom.scss` - Custom styles (Biro Script font-face, dappled light effect, fade-in animations, decorative HRs)
- `quartz/components/renderPage.tsx` - Has custom `DappledLight()` component for the window blinds/leaves light effect
- `quartz/components/scripts/darkmode.inline.ts` - Modified to add `animation-ready` class for fade/dappled light animations
- `quartz/components/Date.tsx` - Date formatting (`formatDate()` uses `toLocaleDateString` with month: "short", day: "2-digit", year: "numeric")
- `quartz/components/ContentMeta.tsx` - Renders date + reading time metadata

## Custom Visual Effects
- **Dappled light**: Window blinds + leaves shadow overlay with sunrise/sunset color transitions on theme toggle. DOM in `renderPage.tsx`, styles in `custom.scss`.
- **Fade-in animations**: Staggered fade-in on page elements when theme changes. Triggered by `animation-ready` class on body.
- **Decorative HRs**: Rendered as `* * *` text separators instead of lines.

## Layout
- **Left sidebar**: PageTitle, Search + Darkmode toggle, RecentNotes (writing from `blog/`)
- **Right sidebar**: Graph (desktop), TableOfContents (desktop), Backlinks
- **Before body**: ArticleTitle, ContentMeta (with Biro Script font), TagList
- No Explorer or Breadcrumbs (removed to match jzhao.xyz style)

## Static Assets
- `quartz/static/font/` - Biro Script font files (.woff, .woff2, font-style.css)
- `quartz/static/leaves.png` - Leaf texture for dappled light effect
- `quartz/static/icon.png` - Favicon

## Plugins
- FrontMatter, CreatedModifiedDate (priority: frontmatter > git > filesystem)
- SyntaxHighlighting (github-light/github-dark themes)
- ObsidianFlavoredMarkdown, GitHubFlavoredMarkdown
- TableOfContents, CrawlLinks, Description, Latex (KaTeX)
- CustomOgImages (can comment out to speed up builds)

## Notes
- `defaultDateType` is set to "created"
- Locale is "en-US"
- SPA mode and popovers are enabled
- The `@use "./variables.scss" as *` import in custom.scss provides access to breakpoint variables
