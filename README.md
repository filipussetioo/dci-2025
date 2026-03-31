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

| Variable        | Description                  | Example                          |
| --------------- | ---------------------------- | -------------------------------- |
| `VITE_BASE_URL` | Base path for the app        | `/` or `/annual-report/2025/`    |
| `VITE_PDF_URL`  | URL to the annual report PDF | `https://example.com/report.pdf` |

### Development

```bash
pnpm install
pnpm dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
pnpm build
```

Preview the website:

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

Build output is in `dist/` — all static files, no server needed:
- `index.html` — entry point
- `assets/` — JS, CSS, fonts, images (all bundled)
- `video/` — video files
- `pdf/` — downloadable PDFs

### Nginx proxy config

All methods below run the app on `localhost:5173`. Add this to the server's Nginx config to serve it under a subpath:

```nginx
location /annual-report/2025/ {
    proxy_pass http://localhost:5173/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

Then test and reload:
```bash
sudo nginx -t
sudo nginx -s reload
```

---

### Method 1: Docker (recommended)

Auto-restarts on crash or reboot.

```bash
pnpm build
docker build --no-cache -t dci2025 -f Dockerfile .
docker run -d -p 5173:5173 --restart always --name dci2025container dci2025
```

**Update:**
```bash
docker stop dci2025container && docker rm dci2025container
pnpm build
docker build --no-cache -t dci2025 -f Dockerfile .
docker run -d -p 5173:5173 --restart always --name dci2025container dci2025
```

---

### Method 2: serve + pm2

No Docker needed. Install once on the server:
```bash
npm install -g serve pm2
```

Build and start:
```bash
pnpm build
pm2 start serve --name dci2025 -- -s dist -l 5173
pm2 save
pm2 startup
```

**Update:**
```bash
pnpm build
pm2 restart dci2025
```

---

### Method 3: Static files

No process running. Nginx serves the files directly.

Build and copy to server:
```bash
pnpm build
scp -r dist/* user@server-ip:/var/www/annual-report/2025/
```

Use this Nginx config instead of the proxy config above:
```nginx
location /annual-report/2025/ {
    alias /var/www/annual-report/2025/;
    try_files $uri /annual-report/2025/index.html;
}
```

**Update:**
```bash
pnpm build
scp -r dist/* user@server-ip:/var/www/annual-report/2025/
```

No Nginx restart needed — files are replaced in place.
