const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world' })
})

app.listen(5000, console.log(`App are listen on 5000`))