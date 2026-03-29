# DCI Indonesia - Annual Report 2025

Single-page interactive annual report for PT DCI Indonesia Tbk, built with React, TypeScript, and Vite.

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

### Development

```bash
pnpm install
pnpm dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
pnpm install
pnpm build
pnpm preview
```

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
