const express = require('express')
const router = express.Router()
const randomstring = require('randomstring')
const fs = require('fs')
const videoDetails = require('./database/videoDetails')
const videos = require('./database/videos')

router.get('/', (req, res) => res.status(200).send(videos))

router.post('/', (req, res) => {
  if (res.body) {
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
  } else {
    res.status(400).send({ message: 'Body required for post.' })
  }
})

router.get('/:id', (req, res) => {
  const data = videoDetails.find(video => video.id === req.params.id)
  data
    ? res.status(200).send(data)
    : res.status(404).send({ message: 'No video with that id exists' })
})

router.put('/:id/likes', (req, res) => {
  const idLocation = videoDetails.findIndex(video => video.id === req.params.id)
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

  const idLocation = videoDetails.findIndex(video => video.id === req.params.id)
  if (idLocation !== -1) {
    videoDetails[idLocation].comments.push(newComment)
    fs.writeFileSync('./routes/database/videoDetails.json', JSON.stringify(videoDetails))
    res.status(200).send(newComment)
  } else {
    res.status(404).send({ message: 'No video with that id exists' })
  }
})

router.delete('/:id/comments/:idComment', (req, res) => {
  const idLocation = videoDetails.findIndex(video => video.id === req.params.id)
  const commentLocation = videoDetails[idLocation].comments.findIndex(
    comment => comment.id === req.params.idComment
  )

  if (commentLocation !== -1) {
    const commentArray = videoDetails[idLocation].comments.slice(0)
    commentArray.splice(commentLocation, 1)
    videoDetails[idLocation].comments = commentArray

    fs.writeFileSync('./routes/database/videoDetails.json', JSON.stringify(videoDetails))
    res.status(200).send(videoDetails[idLocation].comments[commentLocation])
  } else {
    res.status(404).send({ message: 'Error cannot find comment with that id.' })
  }
})

module.exports = router
