var express = require('express');
var router = express.Router();
var resv = require('./model');
/* GET home page. */

router.get('/getAllResv', function(req, res, next) {
	console.log("/getAllResv");
	
	var resvInstance = new resv({
	    resv_name: "dummy",
	    resv_lat: "11.1",
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

module.exports = router;




