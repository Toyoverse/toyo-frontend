### Project Environment Variables

All environment variables must start with `REACT_APP_`

Env files:

`.env` - Default

`.env.prod` - Production

#### API
* `REACT_APP_API_BASE_URL` - The base url used for requests to the API
#### NETWORK
* `REACT_APP_NETWORK_CHAIN_ID`
* `REACT_APP_NETWORK_CHAIN_NAME`
* `REACT_APP_NETWORK_RPC`
#### CONTRACT
* `REACT_APP_NFT_TOKEN_ADDRESS`
* `REACT_APP_NFT_TOKEN_ADDRESS_2` - Contract address for boxes minted after ID 9477
* `REACT_APP_NFT_TOKEN_CONTRACT_SYMBOL`
* `REACT_APP_NFT_TOKEN_CROWDSALE_ADDRESS`
* `REACT_APP_NFT_TOKEN_SWAP_ADDRESS`

### Development

#### No Docker:

```npm
npm install
npm start
```

#### Docker:

Build image:

`npm run docker-build-image`

Run image:

`npm run docker-start`

### Deploy

Run `deployScript.sh` at the root of the project folder.

If deploying for development, will use `.env`:

```bash
./deployScript.sh
```

If deploying for production, will use `.env.prod`:

```bash
./deployScript.sh prod
```