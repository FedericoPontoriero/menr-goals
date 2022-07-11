
const { urlencoded } = require('express')
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(urlencoded)

app.get('/api/goals', (req, res) => {
  res.send('Get goals')
})

app.listen(port, () => console.log(`Server started on port: ${port}`))
