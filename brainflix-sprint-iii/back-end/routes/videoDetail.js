const express = require('express')
const router = express.Router()

const videoDetails = require('./database/videoDetails')

router.get('/:id', (req, res, next) => {
  var id = req.params.id
  var ids = videoDetails.map(video => video.id)
  var idLocation = ids.indexOf(id)
  idLocation !== -1
    ? res.status(200).send(videoDetails[idLocation])
    : res.status(404).send({ message: 'No video with that id exists' })
})

module.exports = router

// res.status(200).send({
//   success: true,
//   message: `Video details retrieved successfully`,
//   video: videoDetails[idLocation]
// })
