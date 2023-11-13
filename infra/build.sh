#!/bin/sh

APP_VERSION=$(git rev-parse --short HEAD)

echo "[Site] Building docker image : annuaire-entreprise-site:${APP_VERSION}"
docker build -t annuaire-entreprise-site:${APP_VERSION} -f $(pwd)/infra/Dockerfile $(pwd)
