const express = require('express')
const app = express()
const port = 3001
// node whiteBoardConnection.js

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
var cors = require('cors');
// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));
app.get('/', (req, res) => {
    sendTest();
    res.json({return: 'Hello World!'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const igs = require('ingescape');

function sendTest() {
    igs.info("Test");
    console.log("igs.info done");
};
