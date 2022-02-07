const { assert } = require('chai')
const { default: Web3 } = require('web3')

const Decentragram = artifacts.require('./Decentragram.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Decentragram', ([deployer, author, tipper]) => {
  let decentragram

  before(async () => {
    decentragram = await Decentragram.deployed()
  })


  describe('Deployment', async () => {
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


  describe('Post', async () => {
    let result, postCount
    const hash = 'abc123';
    const postDescription = "Image post description"
    const tipAmount = 0

    before(async () => {
      result = await decentragram.createPost(hash, postDescription, { from: author });
      postCount = await decentragram.postCount();
    })

    it('create post', async () => {
      assert.equal(postCount, 1);
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is incorrect');
      assert.equal(event.hash, hash, 'Hash is incorrect');
      assert.equal(event.description, postDescription, 'Description is incorrect');
      assert.equal(event.tipAmount, tipAmount, 'tip amount is incorrect');
      assert.equal(event.author, author, 'author is incorrect');

      await decentragram.createPost('', postDescription, { from: author }).should.be.rejected;
      await decentragram.createPost(hash, '', { from: author }).should.be.rejected;

      await decentragram.createPost('', '', { from: author }).should.be.rejected;
      await decentragram.createPost(hash, '', '', { from: author }).should.be.rejected;
      await decentragram.createPost('', postDescription, '', { from: author }).should.be.rejected;


      await decentragram.createPost('', '', '', { from: author }).should.be.rejected;

    })

    it('list posts', async () => {
      assert.equal(postCount, 1);
      const post = await decentragram.posts(postCount);
      assert.equal(post.id.toNumber(), postCount.toNumber(), 'id is incorrect');
      assert.equal(post.hash, hash, 'Hash is incorrect');
      assert.equal(post.description, postDescription, 'Description is incorrect');
      assert.equal(post.tipAmount, tipAmount, 'tip amount is incorrect');
      assert.equal(post.author, author, 'author is incorrect');

    })

    it('allows users to tip posts', async () => {
      let oldAuthorBalance;
      oldAuthorBalance = await web3.eth.getBalance(author);
      oldAuthorBalance = new web3.utils.BN(oldAuthorBalance);

      result = await decentragram.tipPostOwner(postCount, { from: tipper, value: web3.utils.toWei('1', 'Ether') });

      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is incorrect');
      assert.equal(event.hash, hash, 'Hash is incorrect');
      assert.equal(event.description, postDescription, 'Description is incorrect');
      assert.equal(event.tipAmount, '1000000000000000000', 'tip amount is incorrect');
      assert.equal(event.author, author, 'author is incorrect');


      let newAuthorBalance;
      newAuthorBalance = await web3.eth.getBalance(author);
      newAuthorBalance = new web3.utils.BN(newAuthorBalance);

      let tipPostOwner;
      tipPostOwner = web3.utils.toWei('1', 'Ether');
      tipPostOwner = new web3.utils.BN(tipPostOwner);

      const expectedBalance = oldAuthorBalance.add(tipPostOwner);

      assert.equal(newAuthorBalance.toString(), expectedBalance.toString());

      await decentragram.tipPostOwner(99, { from: tipper, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;

    })


  })


})

