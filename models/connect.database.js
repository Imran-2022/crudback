const { MongoClient } = require('mongodb');
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.iyci5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const collection = client.db("crud-database").collection("crud-collection1");
module.exports = {
    DATABASE: client,
    DATACOLLECTION: collection,
}
