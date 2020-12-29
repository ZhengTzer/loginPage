// initial declare
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkLogin = require('./function/checkLogin')
const port = 3000
const app = express()
const cookieParser = require('cookie-parser')

// engine setting
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cookieParser('ac'))

// login page
app.get('/', (req, res) => {
  result = req.signedCookies.firstName
  // check cookie
  if (req.signedCookies.firstName) {
    res.render('welcome', { result })
  } else {
    res.render('index')
  }
})

app.post('/', (req, res) => {
  // declare
  const userInput = req.body
  const result = checkLogin(req.body)

  // check login
  if (result.includes('incorrect')) {
    res.render('index', { result, userInput })
  } else {
    res.cookie('firstName', result, { signed: true })
    res.render('welcome', { result })
  }
})

// logout
app.post('/logout', (req, res) => {
  res.clearCookie('firstName')
  res.redirect('/')
})

// port listening
app.listen(port, () => {
  console.log(`express web app running at http://localhost:${port}`)
})
