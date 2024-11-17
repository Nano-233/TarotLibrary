const cards = require('express').Router();
const db = require('../models');
const { Card } = db;

// GET ALL CARDS
cards.get('/', async (req, res) => {
    try{
        const foundCards = await Card.findAll();
        res.status(200).json(foundCards);
    } catch (err) {
        res.status(500).send("server error");
        console.log(err);
    }
})

module.exports = cards;