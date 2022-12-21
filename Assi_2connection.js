const {MongoClient} = require('mongodb');
const url = "mongodb://0.0.0.0:27017";
const database = "students";
const client =new MongoClient(url);
 
//Connection with Database 

async function connection(){
let result = await client.connect();
let db = result.db(database);
return db.collection("CSE");

}

module.exports = connection;