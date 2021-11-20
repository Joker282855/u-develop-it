const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

router.get('/candidates', (req, res) => {

});

router.get('/candidate/:id', (req, res) => {

});

router.post('/candidate', ({ body }, res) => {

});

router.put('/candidate/:id', (req, res) => {

});

router.delete('/candidate/:id', (req, res) => {

});

module.exports = router;