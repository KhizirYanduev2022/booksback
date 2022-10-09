const express = require('express')
const app = express()
const mongoose = require('mongoose')



mongoose.connect("mongodb+srv://Khizir:Khizir123@cluster0.w6mzslx.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))



app.use(express.json())
app.use(require('./routes/books.route'))
app.use(require('./routes/genre.route'))
app.use(require('./routes/review.route'))


app.listen(4000, () => {
    console.log('Сервер запущен успешно')
  })