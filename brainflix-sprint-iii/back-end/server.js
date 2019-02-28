const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const bodyParser = require('body-parser')
const videoDetail = require('./routes/videoDetail')

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => console.log(`Server listening on port ${port}!`))

app.use('/videos', videoDetail)
