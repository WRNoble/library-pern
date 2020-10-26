const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Carthage1@",
  host: "localhost",
  port: 5432,
  database: "pernlibrary",
});

module.exports = pool;
