#!/bin/sh

cat /run/secrets/env_file > /app/.env

NODE_OPTIONS="--max-old-space-size=8192"

npm run build
./node_modules/.bin/next start -p 3000
