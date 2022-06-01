const { Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('add', {
    title: 'add wishes',
    isAdd: true
  })
})

router.post('/', (req, res) => {
  console.log(req.body)

  res.redirect('/wishes')
})

module.exports = router