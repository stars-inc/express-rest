const { Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('add', {
    title: 'add wishes',
    isAdd: true
  })
})

module.exports = router