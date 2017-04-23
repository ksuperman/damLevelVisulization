var express = require('express');
var router = express.Router();
var resv = require('./Resvmodel');
/* GET home page. */

router.get('/insertResv', function(req, res, next) {
	console.log("/getAllResv");
	
		var resvInstance = new resv({
		    resv_name: "dummy1",
		    resv_lat: "11.2",
		    resv_lng: "12.2",
		    resv_maxCap: 5000
		    })
		
		resvInstance.save(function (err) {
	        if (err) {
	        	res.send("error");
	        } else {
	        	res.send("success");
	        }
	    });
	
});

router.get('/getAllResv', function(req, res, next) {
	console.log("/getAllResv");	
	resv.find({}, function (err, document) {
        res.send(document);
    });
});

module.exports = router;




