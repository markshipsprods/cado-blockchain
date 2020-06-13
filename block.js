class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  toString() {
    return `Cado Block -
      Timestamp: ${this.timestamp}
      Lash Hash: ${this.lastHash.substring(0, 10)}
      Hash     : ${this.hash.substring(0, 10)}
      Data     : ${this.data}`
  }

  static genesis() {
    const timestamp = Date.now();
    return new this(timestamp, '---------', 'fir57-h45h', []);
  }

  static mineBlock(lastBlock, data) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = 'todo-hash';
    return new this(timestamp, lastHash, hash, data);
  }

}

module.exports = Block;
