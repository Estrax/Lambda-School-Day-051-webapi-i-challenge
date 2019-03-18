const express = require('express');
const router = express.Router();
const db = require('./data/db');

router.route('/users')
    .get((req, res) => {
        db
            .find()
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json({ error: "The users information could not be retrieved." }));
    })
    .post((req, res) => {
        const {name, bio, created_at, updated_at} = req.body;
        if(!name || !bio) res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
        db
            .insert({
                name,
                bio,
                created_at,
                updated_at
            })
            .then(response => res.status(201).json(response))
            .catch(err => res.status(500).json({ error: "There was an error while saving the user to the database" }));
    });

router.route('/users/:id')
    .get((req, res) => {
        db
            .findById(req.params.id)
            .then(response => {
                if(response.length === 0) res.status(404).json({ message: "The user with the specified ID does not exist." });
                res.json(response);
            })
            .catch(err => res.status(500).json({ error: "The user information could not be retrieved." }));
    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    });

module.exports = router;