// node whiteBoardConnection.js

const express = require('express')
const app = express()
const port = 3001

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

const cors = require('cors');
// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get('/test', (req, res) => {
    sendTest();
    res.json({return: 'Hello World!'})
})

app.post('/newProduct', (req, res) => {
    res.status(201).json({
        message: 'Added Object !'
    });
    const priceNormalized = ((req.body.totalPriceDollar * 100) >> 0.01) / 100;
    igs.outputSetString("title", (priceNormalized).toString());
    igs.outputSetString("chat", req.body.name.toString());
    // igs.outputSetString("chat", manager.getCurrencyNames(priceNormalized));
});

app.get('/reset', (req, res) => {
    igs.outputSetString("title", "0");
    // TODO: next line doesnt work
    igs.outputSetImpulsion("clearChat");

    res.status(201).json({
        message: 'Reset done !'
    });
});
app.post('/changeInCurrency', (req, res) => {
    const currency = req.body.currency;
    const priceNormalized = ((req.body.totalPriceDollar * 100) >> 0.01) / 100;
    const title = (priceNormalized).toString() + " " + currency.toString();
    igs.outputSetString("title", title);
});
app.post('/changeOutCurrency', (req, res) => {
    const currency = req.body.currency;
    const priceNormalized = ((req.body.totalPriceDollar * 100) >> 0.01) / 100;
    const title = (priceNormalized).toString() + " " + currency.toString();
    igs.outputSetString("title", title);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const igs = require('ingescape');

function sendTest() {
    igs.info("Test");
    console.log("igs.info done");
    igs.outputSetString("title", "COUCOU")
    igs.outputSetString("chat", "JSUIS LA")

    let argsList = [];
// argsList = igs.serviceArgsAddBool(argsList, this.boolI);
// argsList = igs.serviceArgsAddInt(argsList, this.integerI);
    argsList = igs.serviceArgsAddString(argsList, "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w480-h960");
    argsList = igs.serviceArgsAddDouble(argsList, 200);
    argsList = igs.serviceArgsAddDouble(argsList, 100);
// argsList = igs.serviceArgsAddData(argsList, this.dataI);

// // image a convertir en base 64 sinon addImageFromUrl
    igs.serviceCall("Whiteboard", "addImageFromUrl", argsList, "");
};



const iopValueTypes = igs.iopValueTypes();

igs.agentSetName("agent1");


igs.logSetConsole(true);
igs.logSetFile(true, null);
igs.logSetStream(true);
igs.definitionSetVersion("1.0");

igs.outputCreate("title", iopValueTypes.IGS_STRING_T, "");
igs.outputCreate("chat", iopValueTypes.IGS_STRING_T, "");
igs.outputCreate("clearChat", iopValueTypes.IGS_IMPULSION_T, "");

//actually start ingescape
igs.startWithDevice("en0", 5670);

igs.outputSetString("title", "0");
igs.outputSetImpulsion("clearChat");
