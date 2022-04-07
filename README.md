### Project Environment Variables

All environment variables must start with `REACT_APP_`

Env files:

`.env` - Default

`.env.production`

`.env.development`

#### API
* `REACT_APP_API_BASE_URL` - The base url used for requests to the API
#### NETWORK
* `REACT_APP_NETWORK_CHAIN_ID`
* `REACT_APP_NETWORK_CHAIN_NAME`
* `REACT_APP_NETWORK_RPC`
* `REACT_APP_NETWORK_WEB_SOCKET`
* `REACT_APP_NETWORK_MATIC_USD_PRICE_FEED`
#### CONTRACT
* `REACT_APP_NFT_TOKEN_ADDRESS`
* `REACT_APP_NFT_TOKEN_CONTRACT_SYMBOL`
* `REACT_APP_NFT_TOKEN_CROWDSALE_ADDRESS`
* `REACT_APP_NFT_TOKEN_SWAP_ADDRESS`

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