const express = require('express');
const router = express.Router();
const db = require('./data/db');

router.route('/users')
    .get((req, res) => {
        
    })
    .post((req, res) => {
        const {name, bio, created_at, updated_at} = req.body;
        if(!name || !bio) res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
        
    });

router.route('/users/:id')
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    });

module.exports = router;