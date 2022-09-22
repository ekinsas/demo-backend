require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const https = require('https');
const logger = require('morgan');
const { constants } = require('crypto');

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger('dev'));

app.use(require('./user/user.router'));

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

https.createServer({
  secureOptions: constants.SSL_OP_NO_TLSv1_2,
}, app);
