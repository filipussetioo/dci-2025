FROM node:22.12.0-alpine AS build_image
RUN npm install -g pnpm@10.6.2
WORKDIR /app/dci2025-app
COPY package.json pnpm-lock.yaml .
RUN pnpm install
COPY . .
COPY .env .

ARG BUILD_MODE=portfolio
RUN if [ "$BUILD_MODE" = "portfolio" ]; then pnpm run build:portfolio; else pnpm run build; fi


FROM node:22.12.0-alpine AS production_image
WORKDIR /app/dci2025-app
RUN npm install -g pnpm@10.6.2
COPY --from=build_image /app/dci2025-app/dist/ /app/dci2025-app/dist/
COPY package.json pnpm-lock.yaml .
COPY vite.config.ts .

RUN pnpm install typescript

EXPOSE 5173
CMD ["pnpm", "run", "preview"]
