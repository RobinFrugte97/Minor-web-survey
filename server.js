const express = require('express')
const fs = require('file-system')
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: true })
const app = express()
const port = process.env.PORT || 3000

app
    .use(express.static('static'))
    .set('view engine', 'ejs')
    .set('views', 'views')

    .get("/", (req, res) => {res.render('index.ejs')})
    .get("/gegevens", (req, res) => {res.render('gegevens.ejs')})
    .get("/verder", (req, res) => {res.render('verder.ejs')})
    .get("/klaar", (req, res) => {res.render('klaar.ejs')})
    .get("/vraag1", (req, res) => {res.render('questions/vraag1.ejs')})
    .get("/vraag2", (req, res) => {res.render('questions/vraag2.ejs')})

    .post('/vraag1', urlencodedParser, (req, res) => {

        const data = JSON.stringify(req.body, null, 2)
        fs.writeFileSync('data/answers.json', data)

        fs.readFile('data/answers.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data)
            }
        })

        res.render('questions/vraag1.ejs')
    })
    .post('/vraag2', urlencodedParser, (req, res) => {

        fs.readFile('data/answers.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                const parsedData = JSON.parse(data)
                const combinedData = Object.assign(parsedData, req.body)
                const writeData = JSON.stringify(combinedData, null, 2)
                console.log(writeData)
                fs.writeFile('data/answers.json', writeData)
            }
        })

        res.render('questions/vraag2.ejs')
    })
    .post('/vraag3', urlencodedParser, (req, res) => {

        fs.readFile('data/answers.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                const parsedData = JSON.parse(data)
                const combinedData = Object.assign(parsedData, req.body)
                const writeData = JSON.stringify(combinedData, null, 2)
                console.log(writeData)
                fs.writeFile('data/answers.json', writeData)
            }
        })

        res.render('questions/vraag3.ejs')
    })


    .listen(port, () => {
        console.log(`server is running on port ${port}`)
    })