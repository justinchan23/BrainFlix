const express = require('express')
const router = express.Router()
const randomstring = require('randomstring')
const fs = require('fs')
const videoDetails = require('./database/videoDetails')

router.get('/:id', (req, res) => {
  var id = req.params.id
  var ids = videoDetails.map(video => video.id)
  var idLocation = ids.indexOf(id)
  idLocation !== -1
    ? res.status(200).send(videoDetails[idLocation])
    : res.status(404).send({ message: 'No video with that id exists' })
  // next()
})

router.put('/:id/likes', (req, res) => {
  var id = req.params.id
  var ids = videoDetails.map(video => video.id)
  var idLocation = ids.indexOf(id)
  if (idLocation !== -1) {
    videoDetails[idLocation].likes += 1
    res.status(200).send(videoDetails[idLocation])
  } else {
    res.status(404).send({ message: 'No video with that id exists' })
  }
})

router.post('/:id/comments', (req, res) => {
  var randomid = randomstring.generate({
    length: 12,
    charset: 'hex',
    capitalization: 'lowercase'
  })

  var newComment = {
    name: req.body.name,
    comment: req.body.comment,
    id: randomid,
    likes: 0,
    timestamp: Math.floor(new Date().getTime())
  }

  var id = req.params.id
  var ids = videoDetails.map(video => video.id)
  var idLocation = ids.indexOf(id)
  if (idLocation !== -1) {
    videoDetails[idLocation].comments.push(newComment)
    fs.writeFile('./routes/database/videoDetails.json', JSON.stringify(videoDetails), () =>
      console.log('New comment added to db.')
    )
    res.status(200).send(newComment)
  } else {
    res.status(404).send({ message: 'No video with that id exists' })
  }
})

router.delete('/:id/comments/:idComment', (req, res) => {
  var id = req.params.id
  var ids = videoDetails.map(video => video.id)
  var idLocation = ids.indexOf(id)

  var idComment = req.params.idComment
  var commentIds = videoDetails[idLocation].comments.map(comment => comment.id)
  var commentLocation = commentIds.indexOf(idComment)

  if (commentLocation !== -1) {
    const commentArray = videoDetails[idLocation].comments.slice(0)
    commentArray.splice(commentLocation, 1)
    videoDetails[idLocation].comments = commentArray

    fs.writeFile('./routes/database/videoDetails.json', JSON.stringify(videoDetails), () =>
      console.log('Comment deleted')
    )

    res.status(200).send(videoDetails[idLocation].comments[commentLocation])
    console.log('found')
  } else {
    res.status(404).send({ message: 'Error 404' })
  }
})
module.exports = router
