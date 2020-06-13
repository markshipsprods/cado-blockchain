const Block = require('./block');

/*
const block = new Block('foo', 'bar', 'zoo', 'baz');
console.log(block.toString());
// tests fake data
*/

/*
console.log(Block.genesis().toString());
// tests the genesis block
*/

const stringBlock = Block.mineBlock(Block.genesis(), 'test string');
console.log(stringBlock.toString());
