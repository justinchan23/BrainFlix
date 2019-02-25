const express = require('express')
const router = express.Router()

const videos = require('./database/videos')

router.get('/', (req, res, next) => {
  res.status(200).send(videos)
})

module.exports = router

// res.status(200).send({
//   success: true,
//   message: 'Videos retrieved successfully',
//   videos: videos
// })
