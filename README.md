### Project Environment Variables

All environment variables must start with `REACT_APP_`

* `REACT_APP_API_BASE_URL` - The base url used for requests to the API

### Development

Build image:

```docker
docker build -t front-toyo:dev .
```

Run image:

```docker
docker run \
    -it \
    --rm \
    -v $(pwd):/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    front-toyo:dev
```