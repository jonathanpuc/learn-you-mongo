/* Task: Here we will learn how to search for documents but only fetch the fields
we need. Also known as projection in MongoDB

Use the parrots collection from the database named learnyoumongo to
find all documents where age is greater than the first argument
passed to your script.

The difference from the last lesson will be that we only want the
name and age properties

Using console.log, print the documents to stdout.
*/

const arg = process.argv[2];
const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err;

  const parrots = db.collection('parrots');
  parrots.find({
      // where age is greater than argument
      age: {$gt: +arg}
  },{
      //exclude id field
      _id:0
  }).toArray((err, docs) => {
      if (err) throw err;
      console.log(docs);
  })
  db.close();
})
