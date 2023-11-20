#!/bin/sh

cat /run/secrets/env_file > /app/.env

NODE_OPTIONS="--max-old-space-size=2048"
NODE_ENV=production

npm run prepare
npm run build
npm run start
