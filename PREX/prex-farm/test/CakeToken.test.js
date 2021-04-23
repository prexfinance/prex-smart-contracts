const { assert } = require("chai");

const PrexToken = artifacts.require('PrexToken');

contract('PrexToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.prex = await PrexToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.prex.mint(alice, 1000, { from: minter });
        assert.equal((await this.prex.balanceOf(alice)).toString(), '1000');
    })
});
