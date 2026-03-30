# DCI Indonesia - Annual Report 2025

Single-page interactive annual report built with React, TypeScript, and Vite.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Lenis (smooth scroll)

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 10+

### Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description | Example |
|---|---|---|
| `VITE_BASE_URL` | Base path for the app | `/` or `/annual-report/2025/` |
| `VITE_PDF_URL` | URL to the annual report PDF | `https://example.com/report.pdf` |

### Development

```bash
pnpm install
pnpm dev
```

Opens at `http://localhost:5173`

### Production Build

**Standalone** (deployed at root `/`):
```bash
pnpm build
```

**Portfolio** (deployed at `/annual-report/2025/`):
```bash
pnpm build:portfolio
```

Preview locally:
```bash
pnpm preview
```

Build output is in `dist/`.

## Docker

### Build image

```bash
docker build --no-cache -t dci2025 -f Dockerfile .
```

### Run container

```bash
docker run -d -p 5173:5173 --name dci2025container dci2025
```

Opens at `http://localhost:5173`

### Stop & remove container

```bash
docker stop dci2025container
docker rm dci2025container
```

## Deployment

### Build output

The `dist/` folder is the finished product — all static files, no server needed:
- `index.html` — entry point
- `assets/` — JS, CSS, fonts, images (all bundled)
- `video/` — video files
- `pdf/` — downloadable PDFs

### Build

```bash
pnpm build
```

### Deploy to server

Copy `dist/` contents to the server:
```bash
scp -r dist/* user@server-ip:/var/www/annual-report/2025/
```

### Nginx config

This app is deployed as a standalone site. To serve it under a subpath (e.g. `/annual-report/2025/`) on an existing domain, add a reverse proxy or alias on their Nginx:

```nginx
location /annual-report/2025/ {
    alias /var/www/annual-report/2025/;
    try_files $uri /annual-report/2025/index.html;
}
```

Then test and reload:
```bash
sudo nginx -t
sudo nginx -s reload
```

### Updating the site

Rebuild and re-copy whenever you make changes:
```bash
pnpm build
scp -r dist/* user@server-ip:/var/www/annual-report/2025/
```

No Nginx restart needed — files are replaced in place.
