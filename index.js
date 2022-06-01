const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
})

app.use(express.static('public'))
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index', { 
    title: 'welcome',
    isHome: true
  })
})

app.get('/add', (req, res) => {
  res.render('add', {
    title: 'add wishes',
    isAdd: true
  })
})

app.get('/wishes', (req, res) => {
  res.render('wishes', { 
    title: 'wishes page',
    isWishes: true
  })
})


const PORT = process.env.PORT ?? 5555

app.listen(PORT, () => {
  console.log(`server has been started at port: ${PORT}`)
})