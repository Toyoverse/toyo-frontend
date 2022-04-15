#!/usr/bin/bash

stop-nginx() {
    echo "Stopping nginx..."
    killall nginx
    systemctl stop nginx
    echo "Waiting for nginx to stop..."
    while pgrep nginx &> /dev/null; do
        sleep 1
    done
}

start-nginx() {
    echo "Starting nginx..."
    systemctl start nginx
}

export-from-env() {
    local env_file
    env_file=$1

    while IFS= read -r line; do
        export "${line?}"
    done < "$env_file"
}

if [[ "$1" == "prod" ]]; then
    echo "Buiding for PRODUCTION environment..."
    export-from-env ".env.prod"
    DEPLOY_DIR_NAME="game.toyoverse.com"
    sleep 3
else
    echo "Buiding for DEVELOPMENT environment..."
    DEPLOY_DIR_NAME="nakatoshivault.dev"
    export-from-env ".env"
    sleep 3
fi

REPO_DIR=$(pwd)
BUILD_DIR="$REPO_DIR/build"
DEPLOY_DIR="/www/wwwroot/$DEPLOY_DIR_NAME"

[[ -d "$DEPLOY_DIR" ]] || \
    { echo "Deploy directory: '$DEPLOY_DIR' not found or is not a directory."; exit 1; }

npm run build

[[ -d "$BUILD_DIR" ]] || \
    { echo "Build directory: '$BUILD_DIR' not found or is not a directory."; exit 1; }

stop-nginx
echo "Removing old build files..."
rm -r "${DEPLOY_DIR:?}"/*
echo "Copying new build files over..."
cp -r "${BUILD_DIR:?}"/* "${DEPLOY_DIR:?}"
start-nginx
echo "Deploying to: $DEPLOY_DIR_NAME"
echo "Deploy complete."