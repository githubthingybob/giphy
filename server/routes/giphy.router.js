const express = require('express');
const router = express.Router();
const axios = require('axios');
const { response } = require('express');
require('dotenv').config();

// router.get('/:term', (req, res) => {
    
//     axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.term}`)
//         .then(response => {
//             console.log(response.data);
//             res.send(response.data)
//         })
//         .catch(err => {
//             console.log(err);
//             res.sendStatus(500)

//         })
//         console.log(req.body);


// });


router.get('/', (req, res) => {
    console.log('req.params', req.params);
    axios({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.term}`
    }).then(response => {
        console.log('got back data', response.data);

        res.send(response.data);
    }).catch(err => {
        console.error(err);

        res.sendStatus(500);
    });
});


module.exports = router;