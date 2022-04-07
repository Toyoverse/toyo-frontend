/* eslint-disable */
const env = process.env;

const contract = {
    nftTokenAddress: env.REACT_APP_NFT_TOKEN_ADDRESS,
    nftTokenContractSymbol: env.REACT_APP_NFT_TOKEN_CONTRACT_SYMBOL,
    nftTokenCrowdsaleAddress: env.REACT_APP_NFT_TOKEN_CROWDSALE_ADDRESS,
    nftTokenSwapAddress: env.REACT_APP_NFT_TOKEN_SWAP_ADDRESS,
}

export default contract;