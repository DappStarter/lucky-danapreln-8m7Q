require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture stone cost ridge come include clock breeze gentle'; 
let testAccounts = [
"0xe5ac863b1371eb33d3e62fdc66d73d00f2b669a02933d709f23f4f95de6cc476",
"0xa424c61fdc3f339f0ab7c3912f70284c0e82ffc760c25008bd75dea006ee6556",
"0x17f34b639b4dcbb4ac93245fe470c2c75203915843dc78cecc9e03cd880251c1",
"0x3747b9d7db181a2b82be82644318ad679c52869be5b761c8013112cb571a6e2a",
"0x3f1a094303e2287971b80efe8ef568873d47bd0e7912a0f9127cfda9875c6e82",
"0x055b5ebac562a14bb9e150e6a21f26100cdfefa77d220665642591442b167284",
"0xa6347297dea9ea6888f029e80ff37a97435aa7fe8651f9f99d7922006445c080",
"0x7576d31bf15d4159569cc1dfa58e2b52bddf035f713a9d2c5159a9d967db2201",
"0x8df230c24c9441d83eeed05f87680548b76f077f2127821c79d684d06fb3f0e8",
"0x1acf0d3776b06f84386523bdb0c8d2792d59855db4d2944f2684578db3c27fe7"
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


