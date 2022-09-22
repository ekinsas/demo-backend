require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

const connection = {
  pool,
  query: (...args) => {
    return pool.connect().then((client) => {
      return client.query(...args)
      .then((result) => {
        client.release();

        if (result.command === 'DELETE' || result.command === 'UPDATE') {
          return result.rowCount > 0;
        } else {
          return result.rows;
        }
      })
      .catch((error) => {
        throw new Error(`Database Error: ${error.message}`);
      });
    });
  },
};

module.exports = connection;
