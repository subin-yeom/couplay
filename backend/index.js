const express = require('express')
const path = require('path')
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
  // res.send('<h1>Hello World!</h1>')
  res.sendFile(path.join(__dirname, "notice.html"));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})