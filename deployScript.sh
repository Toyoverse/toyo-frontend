#!/usr/bin/bash

DEPLOY_DIR_NAME="nakatoshivault.dev"
REPO_DIR=$(pwd)

BUILD_DIR="$REPO_DIR/build"
DEPLOY_DIR="/www/wwwroot/$DEPLOY_DIR_NAME"

[[ -d "$DEPLOY_DIR" ]] || \
    { echo "Deploy directory: '$DEPLOY_DIR' not found or is not a directory."; exit 1; }
[[ -d "$BUILD_DIR" ]] || \
    { echo "Build directory: '$BUILD_DIR' not found or is not a directory."; exit 1; }

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

# Export for production or development environments
if [[ "$1" == "prod" ]]; then
    export-from-env ".env.prod"
else
    export-from-env ".env"
fi
npm run build

stop-nginx
echo "Removing old build files..."
rm -r "${DEPLOY_DIR:?}"/*
echo "Copying new build files over..."
cp -r "${BUILD_DIR:?}"/* "${DEPLOY_DIR:?}"
start-nginx