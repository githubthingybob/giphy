const express = require('express');
const router = express.Router();
const axios = require('axios');

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