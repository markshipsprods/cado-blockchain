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
    return new this('Genesis Time', '---------', 'fir57-h45h', []);
  }

}

module.exports = Block;
