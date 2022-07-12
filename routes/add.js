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
  const wish = new Wish({
    title: req.body.title,
    price: req.body.price,
    img: req.body.img
  })

  try {
    await wish.save()
    res.redirect('/wishes')
  } catch (e) {
    console.log('Error', e)
  }  
})

module.exports = router