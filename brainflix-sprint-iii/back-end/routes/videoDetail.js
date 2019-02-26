const express = require('express')
const router = express.Router()
const randomstring = require('randomstring')
const fs = require('fs')
const videoDetails = require('./database/videoDetails')
const videos = require('./database/videos')
const ids = videoDetails.map(video => video.id)

router.get('/', (req, res) => {
  res.status(200).send(videos)
})

router.get('/:id', (req, res) => {
  const idLocation = ids.indexOf(req.params.id)
  idLocation !== -1
    ? res.status(200).send(videoDetails[idLocation])
    : res.status(404).send({ message: 'No video with that id exists' })
})

router.put('/:id/likes', (req, res) => {
  const idLocation = ids.indexOf(req.params.id)
  if (idLocation !== -1) {
    videoDetails[idLocation].likes += 1
    fs.writeFileSync('./routes/database/videoDetails.json', JSON.stringify(videoDetails))
    res.status(200).send(videoDetails[idLocation])
  } else {
    res.status(404).send({ message: 'No video with that id exists' })
  }
})

router.post('/:id/comments', (req, res) => {
  const randomid = randomstring.generate({
    length: 12,
    charset: 'hex',
    capitalization: 'lowercase'
  })

  const newComment = {
    name: req.body.name,
    comment: req.body.comment,
    id: randomid,
    likes: 0,
    timestamp: Math.floor(new Date().getTime())
  }

  const idLocation = ids.indexOf(req.params.id)
  if (idLocation !== -1) {
    videoDetails[idLocation].comments.push(newComment)
    fs.writeFileSync('./routes/database/videoDetails.json', JSON.stringify(videoDetails))
    res.status(200).send(newComment)
  } else {
    res.status(404).send({ message: 'No video with that id exists' })
  }
})

router.delete('/:id/comments/:idComment', (req, res) => {
  const idLocation = ids.indexOf(req.params.id)
  const commentIds = videoDetails[idLocation].comments.map(comment => comment.id)
  const commentLocation = commentIds.indexOf(req.params.idComment)

  if (commentLocation !== -1) {
    const commentArray = videoDetails[idLocation].comments.slice(0)
    commentArray.splice(commentLocation, 1)
    videoDetails[idLocation].comments = commentArray

    fs.writeFileSync('./routes/database/videoDetails.json', JSON.stringify(videoDetails))
    res.status(200).send(videoDetails[idLocation].comments[commentLocation])
  } else {
    res.status(404).send({ message: 'Error 404' })
  }
})
module.exports = router
