var MongoClient = require('mongodb').MongoClient;

// Open the connection to the server
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    // Find one document in our collection
    db.collection('coll').findOne({}, function(err, doc) {
        //homework 2.1
        //db.data.find({"Wind Direction": { $gt: 180, $lt: 360} }).sort({"Temperature": 1}).limit(1);
        // homework 2.2
        //db.data.find({}).sort({"State" : 1}).sort({"Temperature": -1});
        if(err) throw err;

        // Print the result. 
        // Will print a null if there are no documents in the db.
        console.dir(doc);

        // Close the DB
        db.close();
    });

    // Declare success
    console.dir("Called findOne!");
});
