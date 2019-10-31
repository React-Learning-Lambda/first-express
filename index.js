const express = require('express');

const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 4001;

app.get('/api/friends', (req, res) => {
    res.status(201).json([
        {
            id: 1,
            name: 'Maaruf Dauda'
        },
        {
            id: 2,
            name: 'Isaac Aderogba'
        },
        {
            id: 3,
            name: 'Richany Nguon'
        }
    ])
})

app.get('/', (req, res) => {
    res.send('Go right ahead')
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})