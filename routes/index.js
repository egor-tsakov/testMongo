var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://user:user@cluster0-zffo2.mongodb.net/test?retryWrites=true";
var collection = null;

MongoClient.connect(uri, function(err, client) {
    collection = client.db("testdata").collection("testcoll");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  collection.find().toArray(function (err, docs) {
      if (err) {
          res.render('index', { collection: err })
      }
      res.render('index', { title: 'My collection mongoDB', collection: docs });
  });
  // res.render('index', {title: 'express'});
});

module.exports = router;
