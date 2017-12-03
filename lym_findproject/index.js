let mongo = require('mongodb').MongoClient
let age = process.argv[2]
let URL = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(URL, function(error, db) {
  if (error) throw error
  let parrots = db.collection('parrots')
  parrots.find({
    age: {
      $gt: +age
    }
  }, {
    name: 1
  , age: 1
  , _id: 0
  }).toArray(function(error, docs) {
    if (error) throw error
    console.log(docs)
    db.close()
  })
})