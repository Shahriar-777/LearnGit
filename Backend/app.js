const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/id', (req, res) => {
    res.send('Shahriar asraf');
})
app.get('/date', (req, res) => {
    res.send(' asraf');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})