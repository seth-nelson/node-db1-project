// import express for the server functionality
const express = require('express');

// need an import for knex reading the db file. this is run through knex, and is set up through the 'dbConfig.js' file. & this reads the exports of 'knexfile.js'
const db = require('../data/dbConfig.js');

// setup router used by express
const router = express.Router();


//------------------------------IMPORTANT INFORMATION TO REMEMBER---------------------------//

// Think of SQlite and how you call data from the table. This is the real code, wheras that is a simulated response. You are applying that format here!!!
// Knex uses a --> db.select('*').from('Tablename here') format for select operation
// Knex uses a --> db('Table Name').insert({ name: 'Seth', age: 26 }) format.
//                 

//------------------------------IMPORTANT INFORMATION TO REMEMBER---------------------------//


// GET accounts
// Knex SELECT * FROM
router.get('/', async (req, res) => {
    try {
        const accounts = await db('accounts');
        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ message: 'Could not retrieve the accounts', error: err});
    }
});


// GET accounts by ID
// Knex SELECT * FROM
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const account = await db.select('*').from(accounts).where({ id }).first();
        if (account) {
            res.status(200).json(account);
        } else {
            res.status(400).json({ message: 'The account could not be retrieved.'});
        }
    } catch (err) {
        res.status(500).json({ message: 'The id could not be verified.', error: err});
    }
});

// POST account
// Knex INSERT INTO Tablename (xxx) VALUES (xxx)
router.post('/', async (req, res) => {
    const newAccount = req.body

    try {
        if (!newAccount.name || !newAccount.budget) {
            res.status(400).json({ message: 'Please provide a name and budget for the new account'})
        } else {
        const account = await db.insert(newAccount).into('accounts');
        res.status(201).json(account);}
    } catch (err) {
        res.status(500).json({ message: 'The account could not be created.', error: err});
    }
});


router.put('/:id', async (req, res) => {
    
})


router.delete('/:id', async (req, res) => {
    
})


module.exports = router;