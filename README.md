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

**Portfolio build** (default):
```bash
docker build --no-cache -t dci2025 -f Dockerfile .
```

**Standalone build**:
```bash
docker build --no-cache --build-arg BUILD_MODE=standalone -t dci2025 -f Dockerfile .
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

## AWS Deployment

Below are the possible ways to deploy this app on AWS depending on the existing infrastructure.

### Option 1: S3 + CloudFront

Best for: static site hosting with CDN.

1. Set `VITE_BASE_URL` in `.env` (use `/` for root, or `/annual-report/2025/` for subpath)
2. Build:
   ```bash
   pnpm build
   ```
3. Upload `dist/` to S3:
   ```bash
   aws s3 sync dist/ s3://your-bucket-name/ --delete
   ```
4. Create a CloudFront distribution pointing to the S3 bucket
5. For SPA routing, add a custom error response: 404 → `/index.html` (200)

**If deploying to a subpath on an existing site:**
- Upload to `s3://their-bucket/annual-report/2025/` instead
- Add a CloudFront **behavior** for `/annual-report/2025/*` → the S3 origin

### Option 2: Amplify

Best for: auto-deploy from GitHub.

**As a standalone app:**
1. Connect your GitHub repo in Amplify console
2. Amplify auto-detects Vite and builds on push

**Inside an existing Amplify site:**
1. Build locally: `pnpm build`
2. Copy `dist/` contents into their repo's `public/annual-report/2025/`
3. Add rewrite rule in their Amplify console (Rewrites and redirects):
   ```
   Source: /annual-report/2025/<*>
   Target: /annual-report/2025/index.html
   Type: 200 (Rewrite)
   ```
4. Push to their repo → auto-deploys

### Option 3: Elastic Beanstalk

Best for: managed platform with auto-deploy from GitHub.

**Inside an existing Beanstalk app:**
1. Build locally: `pnpm build`
2. Copy `dist/` contents into their `public/annual-report/2025/`
3. Add Nginx config in `.platform/nginx/conf.d/annual-report.conf`:
   ```nginx
   location /annual-report/2025/ {
       alias /var/app/current/public/annual-report/2025/;
       try_files $uri /annual-report/2025/index.html;
   }
   ```
4. Push to their repo → auto-deploys

### Option 4: EC2

Best for: full control over the server.

1. SSH into the EC2 instance
2. Copy `dist/` to `/var/www/annual-report/2025/`
3. Add Nginx config:
   ```nginx
   location /annual-report/2025/ {
       alias /var/www/annual-report/2025/;
       try_files $uri /annual-report/2025/index.html;
   }
   ```
4. Reload Nginx: `sudo nginx -s reload`

**Or run with Docker on EC2:**
```bash
docker build --no-cache -t dci2025 -f Dockerfile .
docker run -d -p 5173:5173 --name dci2025container dci2025
```
Then add Nginx reverse proxy for `/annual-report/2025/` → `localhost:5173`.

### Option 5: ECS (Fargate)

Best for: containerized deployment, managed by AWS.

1. Build and push Docker image to ECR:
   ```bash
   aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.ap-southeast-1.amazonaws.com
   docker build -t dci2025 -f Dockerfile .
   docker tag dci2025 <account-id>.dkr.ecr.ap-southeast-1.amazonaws.com/dci2025
   docker push <account-id>.dkr.ecr.ap-southeast-1.amazonaws.com/dci2025
   ```
2. Create ECS service with the image
3. Add ALB listener rule: path `/annual-report/2025/*` → your target group

### Option 6: EKS (Kubernetes)

Best for: existing Kubernetes cluster.

1. Push Docker image to ECR (same as ECS above)
2. Deploy with a Kubernetes manifest and add Ingress rule:
   ```yaml
   - path: /annual-report/2025/
     pathType: Prefix
     backend:
       service:
         name: dci2025
         port:
           number: 5173
   ```

### Option 7: App Runner

Best for: simplest container hosting, no infra to manage.

1. Push Docker image to ECR (same as ECS above)
2. Create App Runner service pointing to the image
3. If integrating with existing site, add a CloudFront **behavior** for `/annual-report/2025/*` → App Runner URL as origin

---

### Note on `VITE_BASE_URL`

- `pnpm build` uses `.env` (`VITE_BASE_URL=/`) for standalone deployment
- `pnpm build:portfolio` sets `VITE_BASE_URL=/annual-report/2025/` for subpath deployment
- Docker defaults to portfolio build; pass `--build-arg BUILD_MODE=standalone` for standalone
