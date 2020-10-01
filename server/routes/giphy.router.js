const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: process.env.GIPHY_API_KEY,
        }
    }).then(response => {
        console.log('got back data', response.data);

        res.send(response.data);
    }).catch(err => {
        console.error(err);

        res.sendStatus(500);
    });
});


module.exports = router;