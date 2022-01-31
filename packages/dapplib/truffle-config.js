require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender state note radar often toward coral light army gentle'; 
let testAccounts = [
"0xd48ebccb83d8fb5380eebae6acf90b17ba0ec91c5517e125e8c7af3696f82a20",
"0x33c5eb9accbc63a92d492d18e5c876c19a040b3647333519a87c12159f6d1ff8",
"0x262c73929b17b899be4e02b5a303e78200401c7fa8ae0d4442685fd88960c089",
"0xa7ef530a4c53f6eec90b028f3f57a3d698d51b44f68ba1cfc6592d5acf495057",
"0xd17ba51f243782ef89c5e3197ad77271f75db63a4f5897271940531fa3661a5e",
"0x3f693636e618a7ccacda72e0a9976d088bc6b29597e86f98d444d8b994655053",
"0x7c2112c53bad0331266c68f5b8686da397c2b70adc23c7c24d5ad343e6bda7c3",
"0x9dfae76c46a6bba430fabd05fa4cc987ace14faaa4dfc1a40273e68eb33d830d",
"0x45a2ca61b2c8890530d487ba8a610460a1f04463e138778f8b4b3935248f0709",
"0x24fe725eb7b43bfc0126089093b30e0e173b4f33eac0c31719934e1483d1434e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


