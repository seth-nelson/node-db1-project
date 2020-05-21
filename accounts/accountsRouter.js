// import express for the server functionality
const express = require('express');

// need an import for knex reading the db file. this is run through knex, and is set up through the 'dbConfig.js' file. & this reads the exports of 'knexfile.js'
const db = require('../data/dbConfig.js');

// setup router used by express
const router = express.Router;


//---------------------------------------------------------//
//  GET /api/accounts  //
//---------------------------------------------------------//

router.get('/', async (req, res) => {
    try {
        const accounts = await db('accounts');
        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ message: 'Could not retrieve the accounts', error: err});
    }
});


router.get('/:id', async (req, res) => {

})


router.post('/', async (req, res) => {
    
})


router.put('/:id', async (req, res) => {
    
})


router.delete('/:id', async (req, res) => {
    
})


module.exports = router;