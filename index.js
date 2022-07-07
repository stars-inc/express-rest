const express = require('express')
const exphbs = require('express-handlebars')
const homeRoute = require('./routes/home')
const addRoute = require('./routes/add')
const wishesRoute = require('./routes/wishes')
const cardRoute = require('./routes/card')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
})

app.use(express.static('public'))
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: true}))

app.use('/', homeRoute)
app.use('/add', addRoute)
app.use('/wishes', wishesRoute)
app.use('/card', cardRoute)


const PORT = process.env.PORT ?? 5555

app.listen(PORT, () => {
  console.log(`server has been started at port: ${PORT}`)
})