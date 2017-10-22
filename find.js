/* Task: Here we will learn how to search for documents.

In this exercise the database name is learnyoumongo.
So, the url would be something like: mongodb://localhost:27017/learnyoumongo

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

Using console.log, print the documents to stdout.
*/

const arg = process.argv[2];
const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err;

  const parrots = db.collection('parrots');
  parrots.find({
      age: {$gt: +arg}
  }).toArray((err, docs) => {
      if (err) throw err;
      console.log(docs);
  })
  db.close();
})
