# Notes.
1. gatsby-pancake-api: can be used as an example, was slightly modified to suit our modified contracts.
1. pancake-swap-lib: an underlying library, used as is.
1. prex-core: a fork and modded version of pancake-swap-core
1. prex-periphery: a fork and modded version of pancake-swap-periphery
1. prex-farm: a fork and modded version of pancake-farm

# WARNING / REMINDER
1. If any changes are made, recall to edit the init code hash! Refer to: https://github.com/Uniswap/uniswap-v2-core/issues/102
    ```javascript
    import { INIT_CODE_HASH } from '../src/constants'

    import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
    import { keccak256 } from '@ethersproject/solidity'

    const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])
    ```

# REFERENCES
### FRONT END & UI
* https://github.com/pancakeswap/pancake-info
* https://github.com/pancakeswap/pancake-frontend
* https://github.com/pancakeswap/pancake-swap-interface
* https://github.com/pancakeswap/pancake-toolkit

### SERVER
* https://github.com/pancakeswap/pancake-subgraph
* https://github.com/pancakeswap/pancake-info-api

### SERVERLESS ARCHITECTURE
* https://github.com/pancakeswap/gatsby-pancake-api

### CONTRACT - CORE
* https://github.com/pancakeswap/pancake-swap-lib.git
* https://github.com/pancakeswap/pancake-swap-core
* https://github.com/pancakeswap/pancake-swap-periphery
* https://github.com/pancakeswap/pancake-farm

### CONTRACT - FEATURE
* https://github.com/pancakeswap/lottery-contract.git
