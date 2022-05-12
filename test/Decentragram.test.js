const { assert } = require('chai');
const { ethers } = require('hardhat');
const { BigNumber } = require("ethers");
const { result } = require('underscore');

require('chai')
  .use(require('chai-as-promised'))
  .should()

describe("Decentragram contract", function () {


  var tipper, user;

  var Decentragram, decentragram;

  before(async function () {
    signers = await ethers.getSigners()
    tipper = signers[0]
    user = signers[1]

    Decentragram = await ethers.getContractFactory("Decentragram")
  })


  describe('deployment', async () => {

    before(async function () {
      decentragram = await Decentragram.deploy();
      await decentragram.deployed()
    })

    it('deploys successfully', async () => {
      const address = await decentragram.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await decentragram.name()
      assert.equal(name, "Decentragram", "Contract don't have name or is incorrect")
    })
  })


  describe('createPost', async () => {
    let result, startingPostCount
    const hash = 'abc123';
    const postDescription = "Image post description"
    const tipAmount = 0

    before(async () => {
      decentragram = await Decentragram.deploy();
      await decentragram.deployed()
      startingPostCount = await decentragram.postCount();
      result = await decentragram.connect(user).createPost(hash, postDescription);
    })

    it('should increase post count', async () => {
      newPostCount = await decentragram.postCount();
      assert.equal(newPostCount,startingPostCount.toNumber() + 1)
    })


    it('should emit event', async () => {

      // let receipt = await result.wait();
      // console.log(receipt.events[0].args)

      await expect(result)
        .to.emit(decentragram, "PostCreated")
        .withArgs("1", hash, postDescription, user.address)

    })


    it('should reject empty values', async () => {

      await decentragram.createPost('', postDescription).should.be.rejected;
      await decentragram.createPost(hash, '').should.be.rejected;
      await decentragram.createPost('', '').should.be.rejected;

    })

    it('should return data from contract', async () => {
      const post = await decentragram.posts("1");
      assert.equal(post.id.toNumber(), 1, 'id is incorrect');
      assert.equal(post.hash, hash, 'Hash is incorrect');
      assert.equal(post.description, postDescription, 'Description is incorrect');
      assert.equal(post.tipAmount, tipAmount, 'tip amount is incorrect');
      assert.equal(post.author, user.address, 'author is incorrect');

    })


  })

  describe('tipPostOwner', async () => {

    let result, postCount
    const hash = 'abc123';
    const postDescription = "Image post description"

    let oldAuthorBalance, newAuthorBalance;

    before(async () => {
      decentragram = await Decentragram.deploy();
      await decentragram.deployed()

      result = await decentragram.connect(user).createPost(hash, postDescription);

      oldAuthorBalance = await ethers.provider.getBalance(user.address);
      oldAuthorBalance = BigNumber.from(oldAuthorBalance);

      postCount = await decentragram.postCount();
      result = await decentragram.connect(tipper).tipPostOwner(postCount, { value: web3.utils.toWei('1', 'Ether') });
    })


    it('should increase author balance', async () => {

      await expect(result)
        .to.emit(decentragram, "PostTipped")
        .withArgs("1", hash, postDescription, web3.utils.toWei('1', 'Ether'), user.address)


      newAuthorBalance = await ethers.provider.getBalance(user.address);
      newAuthorBalance = BigNumber.from(newAuthorBalance);


      let tipPostOwner = web3.utils.toWei('1', 'Ether');
      tipPostOwner = BigNumber.from(tipPostOwner);

      const expectedBalance = oldAuthorBalance.add(tipPostOwner);

      assert.equal(newAuthorBalance.toString(), expectedBalance.toString());


    })

    it('should fail for non existent post', async () => {

      await decentragram.connect(tipper).tipPostOwner(99, { value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;

    })
  })
})




