const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get("/", (req, res) => {
    res.render('index.ejs')
})

app.get("/gegevens", (req, res) => {
    res.render('gegevens.ejs')
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})