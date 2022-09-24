const express = require('express')
const app = express()
const PORT = 8000

const poems = {
    "A Walk in Valhalla":{
        "body": "Hell awaits the wonderous soul who binds the crest of matrinous glory, oh does it set ye breast a flutter?",
        "collection": "Black Treacle: Poems About Love",
        "yearPublished": 2022,
        "GoodreadsRating": 4.2
    },

    "Lake of Mirrors":{
        "body": "One Mirror, two mirror, three mirror, four, reflect my life right out that door, a simple gesture upon a cotton shirt, I ask thee, doth thou know hurt? ",
        "collection": "Lost Ink Magazine Edition #683: Papaya",
        "yearPublished": 2020,
        "GoodreadsRating": 4.8
    },
}
const drainGang = {

        "bladee": {
                'age': 29,
                'birthName': 'Benjamin Reichwald',
                'birthLocation': 'Stockholm, Sweden'
    
                },
    
         "ecco2k": {
                'age': 27,
                'birthName': 'Zak Arogundade Gaterud',
                'birthLocation': 'London, England'
    
                },    
    
         "thaiboy digital": {
                'age': 27,
                'birthName': 'Thanapat Bunleang',
                'birthLocation': 'Khon Kaen, Thailand'
    
                },       
    
         "unknown memory": {
                'age': "???",
                'birthName': '???',
                'birthLocation': '???'
    
                },       
    
    
    }



app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/index.html')
})

app.listen(PORT, () => {
    console.log(`the server has been ported to ${PORT}`)
})

app.get('/api/:name', (req, res) => {
    const name = req.params.name.toLowerCase()
    drainGang[name] ? res.json(drainGang[name]) : res.json(drainGang['unknown memory'])
})

