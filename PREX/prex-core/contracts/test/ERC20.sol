pragma solidity =0.5.16;

import '../PrexERC20.sol';

contract ERC20 is PrexERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
