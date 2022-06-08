const { Router} = require('express')
const Wish = require('../models/wish.js')
const router = Router()


router.get('/', (req, res) => {
  res.render('add', {
    title: 'add wishes',
    isAdd: true
  })
})

router.post('/', async (req, res) => {
  const wish = new Wish(req.body.title, req.body.price, req.body.img)
  
  await wish.save()
  
  res.redirect('/wishes')
})

module.exports = router