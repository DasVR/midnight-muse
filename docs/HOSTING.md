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
- **The letter form** posts to `/api/letter`, handled by the Worker in
  `worker/` (the only code that runs; everything else is static). It checks
  the fields, drops bot submissions, and emails Dani with the client's
  address as Reply-To. If sending fails, the visitor sees an error and an
  Instagram link instead of a false "sent".

  **One-time setup in the Cloudflare dashboard** (the site works without it,
  but letters will show the error until it's done):
  1. Domain → **Email** → **Email Routing** → enable it for `midnightmuse.pics`
     (Cloudflare adds the MX/TXT records).
  2. Email Routing → **Destination addresses** → add Dani's real inbox and
     click the verification link Cloudflare emails her.
  3. Workers & Pages → `midnight-muse` → **Settings** → **Variables and
     Secrets** → add a secret named `LETTER_TO` with that same address.
     (Optional `LETTER_FROM`, default `letters@midnightmuse.pics`.)
  4. Redeploy (push to `main`, or Deployments → Retry). `wrangler.jsonc`
     already declares the `send_email` binding.

  Test the Worker's rules with `node worker/letter.test.mjs`.

## Search and sharing

The live domain is `https://midnightmuse.pics`. `wireframe/robots.txt` and
`wireframe/sitemap.xml` point at it, and every page carries absolute
canonical and Open Graph URLs. If the domain ever changes, search and
replace `midnightmuse.pics` across `wireframe/`.

The old GitHub Pages preview workflow has been removed; Cloudflare is the
only deploy.
