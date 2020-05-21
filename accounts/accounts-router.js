// import express for the server functionality
const express = require('express');

// need an import for knex reading the db file. this is run through knex, and is set up through the 'dbConfig.js' file. & this reads the exports of 'knexfile.js'
const db = require('../data/dbConfig.js');

// setup router used by express
const Router = express.Router


//---------------------------------------------------------//
//  GET /api/posts  //
//---------------------------------------------------------//

router.get('/', async (req, res) => {
    
})