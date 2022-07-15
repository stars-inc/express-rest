const express = require('express')
const mongoose = require('mongoose')
const apiKey = require('./utils/parseArgs')
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const homeRoute = require('./routes/home')
const addRoute = require('./routes/add')
const wishesRoute = require('./routes/wishes')
const cardRoute = require('./routes/card')
const User = require('./models/user')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  handlebars: allowInsecurePrototypeAccess(Handlebars)
})

app.use(async (req, res, next) => {
  try {
    const user = await User.findById('62d15218785a497fed38f80c')
    req.user = user
    next()
  } catch(e) {
    console.log(e)
  }
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

dbConnect().catch(err => console.log(err))

async function dbConnect() {
  const password = apiKey(process.argv)
  
  const url = `mongodb+srv://stars_inc:${password}@cluster0.ml5o2.azure.mongodb.net/?retryWrites=true&w=majority`

  await mongoose.connect(url)

  const isUser = await User.findOne()

  if (!isUser) {
    const user = new User({
      emeil: 'test@test.com',
      name: 'test',
      cart: {
        items: []
      }
    })

    await user.save()
  }

  app.listen(PORT, () => {
    console.log(`server has been started at port: ${PORT}`)
  })
}