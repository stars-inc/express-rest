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

router.get('/:id', async (req, res) => {
  const wish = await Wish.getById(req.params.id)
  res.render('wish', {
    title: `Wish ${wish.title}`,
    wish
  })
})

module.exports = router