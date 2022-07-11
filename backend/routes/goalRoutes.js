const express = require('express')
const router = express.Router()
const { getGoals } = require('../controllers/goalController')

app.get('/', getGoals)

app.post('/', (req, res) => {
  res.status(200).json({message: 'Set goal'})
})

app.put('/:id', (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
})

app.delete('/:id', (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
})


module.exports = router
