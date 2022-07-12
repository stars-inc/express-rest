const { Router } = require('express')
const Wish = require('../models/wish')
const router = Router()

router.get('/', async (req, res) => {
  const wishes = await Wish.find()
  res.render('wishes', { 
    title: 'wishes page',
    isWishes: true,
    wishes
  })
})

router.get('/:id/edit', async (req, res) => {
  if (!req.query.allow) {
    return res.redirect('/wishes')
  }

  const wish = await Wish.findById(req.params.id)

  res.render('wish-edit', {
    title: `Wish ${wish.title}`,
    wish
  })
})

router.get('/:id', async (req, res) => {
  const wish = await Wish.findById(req.params.id)
  res.render('wish', {
    title: `Wish ${wish.title}`,
    wish
  })
})

router.post('/edit', async (req, res) => {
  await Wish.findByIdAndUpdate(req.body.id, req.body)

  res.redirect('/wishes')
})

module.exports = router