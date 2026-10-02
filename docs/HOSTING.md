# Hosting

The site is static: plain HTML, CSS, JavaScript and images in `wireframe/`,
with no build step and no server. Any static host can serve it.

## Recommended: Cloudflare (where the domain already lives)

Cloudflare's free plan serves static sites from its global network, with
HTTPS, the domain, DNS and caching all in one dashboard. There is no
bandwidth bill for photos and no server to maintain, and deploys take
about a minute.

**One-time setup**

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a
   repository**, and pick `DasVR/midnight-muse`.
2. Leave the build command empty. Cloudflare reads `wrangler.jsonc` at the
   repo root, which points it at `./wireframe`.
3. Once it deploys, open the project → **Settings** → **Domains & Routes**
   → **Add** → **Custom domain** and enter Dani's domain (and `www.` if
   wanted). DNS records are created automatically because the domain is
   already on Cloudflare.

After that, every merge to `main` deploys on its own. Pull requests get
their own preview links.

`wireframe/_headers` sets caching for photos and a few security headers.

**Deploy by hand instead** (optional): `npx wrangler deploy` from the repo root.

## Hosting it yourself

Possible, but not worth it for a static site: you'd be keeping a machine
online, patching it, handling HTTPS and paying for photo bandwidth.
Cloudflare does all of that for free. If you still want to, any web server
(nginx, Caddy) pointed at `wireframe/` works; put it behind Cloudflare's
proxy for HTTPS and caching.

## Things that keep working on any host

- **Open Dates** reads Dani's availability from Cal.com's public API in the
  browser; no server or key needed.
- **The letter form** is not wired to anything yet. Before launch it needs a
  destination: a form service (Formspree, Basin), or a small Cloudflare
  Worker that emails Dani. This is the one piece of back end the site needs.

## The current preview

`.github/workflows/pages.yml` publishes `wireframe/` to GitHub Pages on
every push to `main`. Once Cloudflare is live, that workflow can be
deleted.
