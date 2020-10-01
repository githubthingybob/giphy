const express = require('express');
const router = express.Router();
const axios = require('axios');
const { response } = require('express');
require('dotenv').config();

router.get('/:term', (req, res) => {
    axios({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.term}`,

    }).then(response => {
        console.log('LOOOOOOK HEREEEE', response.data);
        console.log('IT FINALLY WORKS! HERE IS THE REQ:', req.params.term,);
        

        res.send(response.data);
    }).catch(err => {
        console.error(err);

        res.sendStatus(500);
    });
});


module.exports = router;