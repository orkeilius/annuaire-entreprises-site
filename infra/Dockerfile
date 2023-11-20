FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json .
RUN npm ci --ignore-scripts --include=dev --include=optional
RUN npm install @esbuild/linux-x64 --legacy-peer-deps --ignore-scripts

COPY . .
