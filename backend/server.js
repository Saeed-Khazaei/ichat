const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world' })
})

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`Server started on PORT ${PORT}`))