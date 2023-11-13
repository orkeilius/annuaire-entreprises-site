#!/bin/sh

NODE_OPTIONS="--max-old-space-size=8192"

npm run build
./node_modules/.bin/next
