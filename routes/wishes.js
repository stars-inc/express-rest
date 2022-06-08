const { Router } = require('express')
const Wish = require('../models/wish')
const router = Router()

router.get('/', async (req, res) => {
  const wishes = await Wish.getAllData()
  res.render('wishes', { 
    title: 'wishes page',
    isWishes: true,
    wishes
  })
})

module.exports = router