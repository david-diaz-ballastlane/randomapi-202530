const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.status(200).send(`Hello World. Your lucky number: ${Math.round(Math.random() * Number.MAX_SAFE_INTEGER)}`)
})

app.listen(PORT, () => {
  console.log('App listening on port:', PORT)
})
