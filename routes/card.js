const { Router } = require('express')
const Wish = require('../models/wish')

const router = Router()

router.post('/add', async (req, res) => {
  const wish = await Wish.findById(req.body.id)
  await req.user.addToCart(wish)

  res.redirect('/card')
})

router.delete('/remove:id', async (req, res) => {
  const card = await Card.remove(req.params.id)

  res.status(200).json(card)
})

router.get('/', async (req, res) => {
  const user = await req.user.populate('cart.items.wishId')
  const wishes = mapCartItems(user.cart)

  res.render('card', {
    title: 'Card',
    wishes,
    price: computedPrice(wishes),
    isCard: true
  })
})

function mapCartItems(cart) {
  return cart.items.map(w => ({
    ...w.wishId._doc, count: w.count
  }))
}

function computedPrice(wishes) {
  return wishes.reduce((total, wish) => {
    return total += wish.price * wish.count
  }, 0)
}

module.exports = router