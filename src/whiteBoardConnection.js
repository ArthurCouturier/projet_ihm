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

app.post('/majWhiteboard', (req, res) => {
    const inCurrency = req.body.inCurrency;
    const outCurrency = req.body.outCurrency;
    const priceNormalized = ((req.body.totalPrice * 100) >> 0.01) / 100;
    const hasToReturn = ((req.body.hasToReturn * 100) >> 0.01) / 100;
    const title = "Total: " + (priceNormalized).toString() + " " + inCurrency.toString() + "   return: " + hasToReturn.toString() + " " + outCurrency.toString();

    if (req.body.product) {
        igs.outputSetString("chat", req.body.product.toString());
    }

    if (req.body.reset) {
        igs.outputSetImpulsion("clearChat");
    }

    igs.outputSetString("title", title);
});

const fs = require('fs');

app.post('/finish', (req, res) => {
    const listOfUrl = req.body.listOfUrl;
    const currency = req.body.currency;
    let k = 1;
    listOfUrl.map((url) => {
        let argsList = [];
        const buffer = fs.readFileSync("src/assets/" + currency + "/" + url + ".png", {encoding: 'base64url'});
        const arrayBuffer = new Uint8Array(buffer).buffer;
        const size = 100;
        const fullUrl = "src/assets/" + currency + "/" + url + ".png";

        const base64 = buffer.toString('base');

        argsList = igs.serviceArgsAddString(argsList, fullUrl);
        // argsList = igs.serviceArgsAddString(argsList, "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w480-h960");
        // argsList = igs.serviceArgsAddData(argsList, arrayBuffer);
        argsList = igs.serviceArgsAddDouble(argsList, k * size); // x
        argsList = igs.serviceArgsAddDouble(argsList, 100 + Math.floor(k/4) * size); // y
        // argsList = igs.serviceArgsAddDouble(argsList, size); // width
        // argsList = igs.serviceArgsAddDouble(argsList, 85); // height
// // image a convertir en base 64 sinon addImageFromUrl
        igs.serviceCall("Whiteboard", "addImageFromUrl", argsList, "");
        console.log(igs.serviceArgsCount("addImage"));
        k++;
    });
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
