/* istanbul ignore file */
const { Pool } = require('pg');
const config = require('../../../Commons/config');

const pool = new Pool(config.database);
console.log(pool.eventNames);

module.exports = pool;
