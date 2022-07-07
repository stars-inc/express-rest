const { Router } = require('express')
const Card = require('../models/card')
const Wish = require('../models/wish')

const router = Router()

router.post('/add', async (req, res) => {
  const wish = await Wish.getById(req.body.id)
  await Card.add(wish)
  res.redirect('/card')
})

router.get('/', async (req, res) => {
  const card = await Card.fetch()
  res.render('card', {
    title: 'Card',
    wishes: card.wishes,
    price: card.price,
    isCard: true
  })
})

module.exports = router