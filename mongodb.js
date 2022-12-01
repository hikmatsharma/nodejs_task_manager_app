// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongo.ObjectID
const {MongoClient , ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
// const id = new ObjectID()
// console.log(id)

MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client)=>{
if(error){
    console.log("unable to connect")
}
const db = client.db(databaseName)
// db.collection('users').insertOne({
//     name: 'hikmmat',
//     age: 21
// },(error,result)=>{
//     if(error){
//         return console.log('Unable to insert')
//     }
//     console.log(result.Ops)
// })
})