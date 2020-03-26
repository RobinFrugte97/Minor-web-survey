const express = require('express')
const fs = require('file-system')
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: true })
const app = express()
const port = process.env.PORT || 3000
let studentnummer = 000000000;
let parsedData = ''

app
    .use(express.static('static'))
    .set('view engine', 'ejs')
    .set('views', 'views')

    .get("/", (req, res) => {res.render('index.ejs')})
    .get("/gegevens", (req, res) => {res.render('gegevens.ejs')})
    .get("/verder", (req, res) => {res.render('verder.ejs')})
    .get("/klaar", (req, res) => {res.render('klaar.ejs')})
    .get("/vraag1", (req, res) => {
        studentnummer = req.query.studentnummer
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag1.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .get("/vraag2", (req, res) => {
        studentnummer = req.query.studentnummer
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag2.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .get("/vraag3", (req, res) => {
        studentnummer = req.query.studentnummer
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag3.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)})
    .get("/vraag4", (req, res) => {
        studentnummer = req.query.studentnummer
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag4.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)})
    .get("/vraag5", (req, res) => {
        studentnummer = req.query.studentnummer
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag5.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)})
    .get("/vraag6", (req, res) => {
        studentnummer = req.query.studentnummer
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag6.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)})
    .get("/vraag7", (req, res) => {
        studentnummer = req.query.studentnummer
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag7.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)})
    .get("/vraag8", (req, res) => {
        studentnummer = req.query.studentnummer
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag8.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)})
    .get("/vraag9", (req, res) => {
        studentnummer = req.query.studentnummer
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag9.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)})
    .get("/vraag10", (req, res) => {
        studentnummer = req.query.studentnummer
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag10.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)})

    .post('/vraag1', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        console.log(studentnummer);
        
        const data = JSON.stringify(req.body, null, 2)
        fs.writeFileSync(`data/${studentnummer}.json`, data)

        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag1.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .post('/vraag2', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag2.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .post('/vraag3', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag3.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .post('/vraag4', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag4.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .post('/vraag5', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag5.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .post('/vraag6', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag6.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .post('/vraag7', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag7.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .post('/vraag8', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag8.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .post('/vraag9', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag9.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    })
    .post('/vraag10', urlencodedParser, (req, res) => {
        studentnummer = req.body.studentnummer
        read(studentnummer, req)
        function retrieve(studentnummer, req) {
            fs.readFile(`data/${studentnummer}.json`, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const parsedData = JSON.parse(data)
                    console.log(parsedData);
                    res.render('questions/vraag10.ejs', { studentnummer, parsedData })
                }
            })
        }
        retrieve(studentnummer, req)
    }).get('/laterverder', urlencodedParser, (req, res) => {
        const checkNummer = req.query.studentnummer
        fs.access(`data/${checkNummer}.json`, fs.F_OK, (err) => {
            if (err) {
                console.error(err)
                return
            }
            fs.readFile(`data/${checkNummer}.json`, 'utf8', function readFileCallback(err, data) {
                console.log(data)
                const parsedData = JSON.parse(data)
                const state = Number(parsedData.state) + 1
                studentnummer = checkNummer
                res.render(`questions/vraag${state}.ejs`, { studentnummer, parsedData})
            })
        })
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
                res.render(`questions/vraag${state}.ejs`, { studentnummer, parsedData})
            })
        })       
    })
    .post('/klaar', urlencodedParser, (req, res) => {
        
        res.render(`klaar.ejs`, { studentnummer })
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