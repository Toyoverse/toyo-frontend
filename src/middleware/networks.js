/* eslint-disable */
const env = process.env;

const network = {
    ChainId: env.REACT_APP_NETWORK_CHAIN_ID,
    ChainName: env.REACT_APP_NETWORK_CHAIN_NAME,
    Rpc: env.REACT_APP_NETWORK_RPC,
}

export default network;