const express = require('express')
const app = express()
const port = 80

app.use('/static', express.static('static'))

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(port, () => console.log(`Reveu app listening on port ${port}!`))