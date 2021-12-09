var Networks = {
    Ganache: {
        ChainId: '0x539',
        ChainName: 'Ganache',
        Rpc: 'https://127.0.0.1:8545',
        WebSocket: 'ws://127.0.0.1:8545',
        MaticUsdPriceFeed: '0xab594600376ec9fd91f8e885dadf0ce036862de0'
    },
    PolygonMumbai: {
        ChainId: '0x13881',
        ChainName: 'Polygon Mumbai',
        Rpc: 'https://rpc-mumbai.maticvigil.com',
        WebSocket: 'wss://rpc-mumbai.maticvigil.com/ws/v1/46773eb632c11b4d238934422fa21ada3bc0d2ce',
        MaticUsdPriceFeed: '0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada'
    },
    PolygonMainnet: {
        ChainId: '0x89',
        ChainName: 'Polygon Mainnet',
        Rpc: 'https://rpc-mainnet.maticvigil.com',
        WebSocket: 'wss://rpc-mainnet.maticvigil.com/ws/v1/46773eb632c11b4d238934422fa21ada3bc0d2ce',
        MaticUsdPriceFeed: '0xab594600376ec9fd91f8e885dadf0ce036862de0'
    }
}

export default Networks