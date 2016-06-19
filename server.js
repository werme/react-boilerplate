import path from 'path'
import express from 'express'

const app = express()

app.use('/public', express.static('public'))

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'index.html'))
)

export default app
