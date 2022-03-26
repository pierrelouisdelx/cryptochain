class TransactionMiner {
    constructor({ blockchain, transactionPool, wallet, pubsub }) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.pubsub = pubsub;
    }
    mineTransactions() {
        // get the transaction pool's valid transactions

        // generate the miner's rewards

        // add a block consisting of these transafction to the blockchain

        // broadcast the updated blockchain

        // clear the pool
    }
}

module.exports = TransactionMiner;

