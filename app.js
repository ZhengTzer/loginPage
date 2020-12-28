// initial declare
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkLogin = require('./function/checkLogin')
const port = 3000
const app = express()

// engine setting
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

// login page
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const userInput = req.body
  const result = checkLogin(req.body)

  if (result.includes('incorrect')) {
    res.render('index', { result, userInput })
  } else {
    res.render('welcome', { result })
  }
})

// port listening
app.listen(port, () => {
  console.log(`express web app running at http://localhost:${port}`)
})
