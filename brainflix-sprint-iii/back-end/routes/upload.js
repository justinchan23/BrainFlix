const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = require('./database/test')

router.post('/', (req, res, next) => {
  // var body = JSON.stringify(req.body)

  console.log(req.body.title)
  console.log(req.body.description)
  // var newData = {
  //   id: 'newid',
  //   title: req.body.title,
  //   channel: 'Justin Chan',
  //   image: 'https://i.imgur.com/l2Xfgpl.jpg'
  // }

  // var newVideo = {
  //   id: 'newid',
  //   title: req.body.title,
  //   channel: 'Justin Chan',
  //   image: 'https://i.imgur.com/i6S8m7I.jpg',
  //   description: req.body.description,
  //   views: '0',
  //   likes: '0',
  //   duration: '1:00',
  //   video: 'https://project-2-api.herokuapp.com/stream',
  //   timestamp: Math.floor(new Date().getTime()),
  //   comments: []
  // }

  // data.push(newData)
  // console.log(data)
  // var new1 = JSON.stringify(newData)
  // console.log(JSON.stringify(data))
  // fs.writeFile('./routes/database/test.json', JSON.stringify(data), () => console.log('success'))

  res.status(200).send({
    success: true,
    data: req.body
  })
})

module.exports = router
