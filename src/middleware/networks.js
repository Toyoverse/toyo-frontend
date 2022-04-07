/* eslint-disable */
const env = process.env;

const network = {
    ChainId: env.REACT_APP_NETWORK_CHAIN_ID,
    ChainName: env.REACT_APP_NETWORK_CHAIN_NAME,
    Rpc: env.REACT_APP_NETWORK_RPC,
    WebSocket: env.REACT_APP_NETWORK_WEB_SOCKET,
    MaticUsdPriceFeed: env.REACT_APP_NETWORK_MATIC_USD_PRICE_FEED,
}

export default network;