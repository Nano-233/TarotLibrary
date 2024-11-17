// DEPENDANCIES
const express = require('express');
const app = express();
const { Sequelize } = require ('sequelize');
const path = require ('path');
const cors = require('cors');

// CONFIG / MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// CONTROLLERS
const cardsController = require('./controllers/cards_controller');
app.use('/api/cards', cardsController);

// LISTEN
app.listen(2333, () => {
    console.log('server is running on port2333');
})