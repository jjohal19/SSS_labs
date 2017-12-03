let mongo = require('mongodb').MongoClient
let URL = 'mongodb://localhost:27017/learnyoumongo'
let fName = process.argv[2]
let lName = process.argv[3]
let doc = {
  firstName: fName
, lastName: lName
}
mongo.connect(URL, function(error, db) {
  if (error) throw error
  let collection = db.collection('docs')
  collection.insert(doc, function(error, data) {
    if (error) throw error
    console.log(JSON.stringify(doc))
    db.close()
  })
})