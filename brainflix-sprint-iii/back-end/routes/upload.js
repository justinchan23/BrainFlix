const express = require('express')
const router = express.Router()
const fs = require('fs')
const randomstring = require('randomstring')
const videos = require('./database/videos')
const videoDetails = require('./database/videoDetails')

router.post('/', (req, res, next) => {
  const id = randomstring.generate({
    length: 12,
    charset: 'alphanumeric',
    capitalization: 'lowercase'
  })

  const newVideo = {
    id: id,
    title: req.body.title,
    channel: 'Justin Chan',
    image: 'https://i.imgur.com/gUuqWIQ.jpg'
  }

  const newVideoDetails = {
    id: id,
    title: req.body.title,
    channel: 'Justin Chan',
    image: 'https://i.imgur.com/gUuqWIQ.jpg',
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: '1:23',
    video: 'https://project-2-api.herokuapp.com/stream',
    timestamp: Math.floor(new Date().getTime()),
    comments: []
  }

  videos.push(newVideo)
  videoDetails.push(newVideoDetails)

  fs.writeFileSync('./routes/database/videos.json', JSON.stringify(videos))

  fs.writeFileSync('./routes/database/videoDetails.json', JSON.stringify(videoDetails))

  res.status(200).send({
    success: true,
    data: req.body
  })
})

module.exports = router
