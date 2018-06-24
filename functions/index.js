const functions = require('firebase-functions')
const express = require('express')
const bodyParser = require('body-parser')
const firebase = require('firebase')
const cors = require('cors')({ origin: true })
const app = express()


app.use(bodyParser.json())

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://aurora-51126.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
};

firebase.initializeApp(config);


app.get('/', (req, res) => {
    res.send('Success')
})

app.get('/users', (req, res) => {
    const userId = req.query.userId
    firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
        res.send(snapshot)
    });
})

app.get('/content', (req, res) => {
    const id = req.query.id
    firebase.database().ref('/content/' + id).once('value').then(function (snapshot) {
        res.send(snapshot)
    });
})

app.get('/test-exam', (req, res) => {
    const testObj = {
        header: {
            title: 'Sample Exam',
            instructor: 'V. G. Upta',
            class: 'CS 938',
            instructions: 'Lorum Ipsum Im a boy you are a girl. Im boy boy you are a girl.'
        },
        content: [
            {
                id: '12fr9ai',
                desc: 'What is 2 + 2.438?',
                category: 'mcq',
                providedAns: [1, 4, 2, 9]
            },
            {
                id: '32sui39',
                desc: 'What is the meaning of life?',
                category: 'short-answer',
                providedAns: []
            },
            {
                id: '12fr9ai',
                desc: 'Cats have BLANK lives',
                category: 'blank',
                providedAns: [1, 4, 99, 9]
            }
        ],
        sections: [
            { 'mcq': 1 },
            { 'short-answer': 1 },
            { 'blank': 1 }
        ]
    }
    res.send({
        code: 200,
        body: testObj
    });
})

exports.api = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST')
    return app(req, res)
});