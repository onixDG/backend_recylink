const mongoose = require('mongoose');

const URI = process.env.DATABASE_URI ? process.env.DATABASE_URI : 'mongodb://localhost/testdb';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open',() => {
    console.log('DB is connected')
});