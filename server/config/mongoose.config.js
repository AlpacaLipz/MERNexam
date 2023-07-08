const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.UNAME;
const pw = process.env.PASSWORD;
const dbURI = process.env.DB_CONNECTION_STRING;
console.log(username, pw, dbURI)
const uri = `mongodb+srv://${username}:${pw}@${dbURI}/${dbName}?retryWrites=true&w=majority`;


mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.log('The database is connected')
        )
    .catch((err) =>
    console.log('Wrong Kid Died', err)
    );