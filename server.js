#!/usr/bin/env phantomjs

function load_page(req,res){
	var path = req.url;
	var read;
	if(path == "/"){
		read = fs.read('./app/index.html');
	}
	else {
    if(fs.exists("./app"+path)){
		  read = fs.read("./app"+path);
    }
	}
	res.write(read);
}

var server = require('webserver').create();
var fs = require('fs');

var service = server.listen(7777,function(req,res){
	console.log(req.url);

  	res.statusCode = 200;
  	load_page(req,res);

  	res.close();

});

if(service){
  console.log("Application running on port 777");
}
else{
  console.log("Error!!!");
}
