const express = require('express');
const router = express.Router();
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express();
const pool = require('../modules/pool');


//GET
//POST
//PUT
//DELETE


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = router;