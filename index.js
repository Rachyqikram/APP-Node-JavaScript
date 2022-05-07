
const path = require('path')
const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const connectDB = require('./models/dataBconfig')
const morgan = require('morgan')
dotenv.config({ path: './config.env' })
connectDB()

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json(), express.urlencoded({ limit: `50mb`, extended: true }))
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
//routes
app.use('/', require('./routes/indexs'))
// app.use('/login', )
//static folder 
app.use(express.static(path.join(__dirname, 'public')))

