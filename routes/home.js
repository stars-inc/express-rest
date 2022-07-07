const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'welcome',
    isHome: true
  })
})

module.exports = router