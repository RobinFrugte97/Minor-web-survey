const express = require('express')

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
    .get("/vraag3", (req, res) => {res.render('questions/vraag3.ejs')})
    .get("/vraag4", (req, res) => {res.render('questions/vraag4.ejs')})
    .get("/vraag5", (req, res) => {res.render('questions/vraag5.ejs')})
    .get("/vraag6", (req, res) => {res.render('questions/vraag6.ejs')})
    .get("/vraag7", (req, res) => {res.render('questions/vraag7.ejs')})
    .get("/vraag8", (req, res) => {res.render('questions/vraag8.ejs')})
    .get("/vraag9", (req, res) => {res.render('questions/vraag9.ejs')})
    .get("/vraag10", (req, res) => {res.render('questions/vraag10.ejs')})
    .get("/vraag11", (req, res) => {res.render('questions/vraag11.ejs')})
    .get("/vraag12", (req, res) => {res.render('questions/vraag12.ejs')})
    .get("/vraag13", (req, res) => {res.render('questions/vraag13.ejs')})
    .get("/vraag14", (req, res) => {res.render('questions/vraag14.ejs')})
    .get("/vraag15", (req, res) => {res.render('questions/vraag15.ejs')})
    .get("/vraag16", (req, res) => {res.render('questions/vraag16.ejs')})
    .get("/vraag17", (req, res) => {res.render('questions/vraag17.ejs')})
    .get("/vraag18", (req, res) => {res.render('questions/vraag18.ejs')})
    .get("/vraag19", (req, res) => {res.render('questions/vraag19.ejs')})
    .get("/vraag20", (req, res) => {res.render('questions/vraag20.ejs')})

    .listen(port, () => {
        console.log(`server is running on port ${port}`)
    })