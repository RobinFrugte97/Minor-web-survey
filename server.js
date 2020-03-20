const express = require('express')
const fs = require('file-system')
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: true })
const app = express()
const port = process.env.PORT || 3000
let studentnummer = 000000000;

app
    .use(express.static('static'))
    .set('view engine', 'ejs')
    .set('views', 'views')

    .get("/", (req, res) => {res.render('index.ejs')})
    .get("/gegevens", (req, res) => {res.render('gegevens.ejs')})
    .get("/verder", (req, res) => {res.render('verder.ejs')})
    .get("/klaar", (req, res) => { res.render('klaar.ejs') })
    .get("/vraag1", (req, res) => { res.render('question/vraag1.ejs') })
    .get("/vraag2", (req, res) => { res.render('question/vraag2.ejs') })
    .get("/vraag3", (req, res) => { res.render('question/vraag3.ejs') })
    .get("/vraag4", (req, res) => { res.render('question/vraag4.ejs') })
    .get("/vraag5", (req, res) => { res.render('question/vraag5.ejs') })
    .get("/vraag6", (req, res) => { res.render('question/vraag6.ejs') })
    .get("/vraag7", (req, res) => { res.render('question/vraag7.ejs') })
    .get("/vraag8", (req, res) => { res.render('question/vraag8.ejs') })
    .get("/vraag9", (req, res) => { res.render('question/vraag9.ejs') })
    .get("/vraag10", (req, res) => { res.render('question/vraag10.ejs') })
    .get("/vraag11", (req, res) => { res.render('question/vraag11.ejs') })
    .get("/vraag12", (req, res) => { res.render('question/vraag12.ejs') })
    .get("/vraag13", (req, res) => { res.render('question/vraag13.ejs') })
    .get("/vraag14", (req, res) => { res.render('question/vraag14.ejs') })
    .get("/vraag15", (req, res) => { res.render('question/vraag15.ejs') })
    .get("/vraag16", (req, res) => { res.render('question/vraag16.ejs') })
    .get("/vraag17", (req, res) => { res.render('question/vraag17.ejs') })
    .get("/vraag18", (req, res) => { res.render('question/vraag18.ejs') })
    .get("/vraag19", (req, res) => { res.render('question/vraag19.ejs') })
    .get("/vraag20", (req, res) => { res.render('question/vraag20.ejs') })

    .post('/vraag1', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        console.log(studentnummer);
        
        const data = JSON.stringify(req.body, null, 2)
        fs.writeFileSync(`data/${studentnummer}.json`, data)

        fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data)
            }
        })

        res.render('questions/vraag1.ejs', {studentnummer})
    })
    .post('/vraag2', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag2.ejs', { studentnummer })
    })
    .post('/vraag3', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag3.ejs', { studentnummer })
    })
    .post('/vraag4', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag4.ejs', { studentnummer })
    })
    .post('/vraag5', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag5.ejs', { studentnummer })
    })
    .post('/vraag6', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag6.ejs', { studentnummer })
    })
    .post('/vraag7', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag7.ejs', { studentnummer })
    })
    .post('/vraag8', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag8.ejs', { studentnummer })
    })
    .post('/vraag9', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag9.ejs', { studentnummer })
    })
    .post('/vraag10', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag10.ejs', { studentnummer })
    })
    .post('/vraag11', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag11.ejs', { studentnummer })
    })
    .post('/vraag12', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag12.ejs', { studentnummer })
    })
    .post('/vraag13', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag13.ejs', { studentnummer })
    })
    .post('/vraag14', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag14.ejs', { studentnummer })
    })
    .post('/vraag15', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag15.ejs', { studentnummer })
    })
    .post('/vraag16', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag16.ejs', { studentnummer })
    })
    .post('/vraag17', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag17.ejs', { studentnummer })
    })
    .post('/vraag18', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag18.ejs', { studentnummer })
    })
    .post('/vraag19', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag19.ejs', { studentnummer })
    })
    .post('/vraag20', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        res.render('questions/vraag20.ejs', { studentnummer })
    })
    .post('/verder', urlencodedParser, (req, res) => {
        const checkNummer = req.body.studentnummerCheck
        fs.access(`data/${checkNummer}.json`, fs.F_OK, (err) => {
            if (err) {
                console.error(err)
                return
            }
            fs.readFile(`data/${checkNummer}.json`, 'utf8', function readFileCallback(err, data) {
                console.log(data)
                const parsedData = JSON.parse(data)
                const state = Number(parsedData.state) + 1
                res.render(`questions/vraag${state}.ejs`, { studentnummer })
            })
        })       
    })
    .listen(port, () => {
        console.log(`server is running on port ${port}`)
    })

function read(studentnummer, req) {
    fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            const parsedData = JSON.parse(data)
            const combinedData = Object.assign(parsedData, req.body)
            const writeData = JSON.stringify(combinedData, null, 2)
            console.log(writeData)
            fs.writeFile(`data/${studentnummer}.json`, writeData)
        }
    })
}