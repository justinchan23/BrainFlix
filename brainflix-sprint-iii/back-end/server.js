const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')

app.use(cors())
app.listen(port, () => console.log(`Server listening on port ${port}!`))

const videos = require('./routes/videos')
const videoDetail = require('./routes/videoDetail')

app.use('/videos', videos)
app.use('/videos/', videoDetail)
