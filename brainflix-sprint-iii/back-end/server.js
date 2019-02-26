const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => console.log(`Server listening on port ${port}!`))

const videoDetail = require('./routes/videoDetail')
const upload = require('./routes/upload')

app.use('/videos', videoDetail)
app.use('/upload', upload)
