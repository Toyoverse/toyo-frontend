#!/bin/bash

sudo docker run \
    -it \
    --rm \
    -v "$(pwd):/app" \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    toyo-front:dev