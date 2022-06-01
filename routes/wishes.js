const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('wishes', { 
    title: 'wishes page',
    isWishes: true
  })
})

module.exports = router