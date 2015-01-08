
// console.log("HELLO WORLD!");

//============First I/O=========

// var fs = require('fs');

// var file = process.argv[2];

// var bufferFile = fs.readFileSync(file);

// var fileString = bufferFile.toString();

// fileString = fileString.split('\n');

// console.log(fileString.length - 1);

//============First I/O END=========

//============First ASYNC I/O=========

// var fs = require('fs');

// var file = process.argv[2];

// fs.readFile(file, function(err, data){

// 	if(err){
// 		throw err;
// 	}else{

// 		var fileString = data.toString();

// 		fileString = fileString.split('\n');

// 		console.log(fileString.length - 1);
// 	}

// });

//============First ASYNCH I/O END=========

//============FILTERED LS=========

//process.argv[2] == path to directory

//process.argv[3] == file extension to filter by

// var fs = require('fs');

// var path = require('path');

// var directory = process.argv[2];

// var ext = '.' + process.argv[3];

// fs.readdir(directory , function(err, list){
// 	if(err) throw err;
// 	for(i in list){
// 		//console.log(list[i] + " : " + path.extname(list[i]));
// 		if( path.extname(list[i]) == ext ){
// 			console.log(list[i])
// 		}
// 	}
// });

//============FILTERED LS=========

// //============MAKE IT MODULAR=========

// var mod = require('./learnnodemod');

// var directory = process.argv[2];

// var extsub = process.argv[3];

// mod(directory, extsub, function(err, values){
// 	if(err) return console.error('There was an error', err);

// 	//console.log(values);
// 	values.forEach(function(value){
// 		console.log(value);
// 	})

// });



// //============MAKE IT MODULAR=========

// //============HTTP CLIENT=========

// var http = require('http');

// var url = process.argv[2];

// http.get( url , function(response){
// 	//Convert data from buffer to String
// 	response.setEncoding('utf8');
// 	response.on('data', function(data){
// 		//Convert data from buffer to String
// 		//data = data.toString();
// 		console.log(data);
// 	}).on('error', function(){
// 		//Do something
// 	}).on('end', function(){
// 		//Do something
// 	})
// });


// //============HTTP CLIENT=========

// //============HTTP COLLECT=========

// var http = require('http');

// http.get( process.argv[2], function(response){
// 	var total = '';
// 	response.setEncoding('utf8')
// 	response.on('data', function(data){
// 		//console.log(data);
// 		total += data;
// 	}).on('end', function(){
// 		console.log(total.length + "\n" + total);
// 	});
// })


// //============HTTP COLLECT=========

// //============JUGGLING ASYNC=========

// var mod = require('./learnnodemod');

// mod(process.argv[2], function(err, data){
// 	if(err) console.error('There was an error with 1', err);

// 	console.log(data);
// 	mod(process.argv[3], function(err, data){
// 		if(err) console.error('There was an error with 2', err);

// 		console.log(data);
// 		mod(process.argv[4], function(err, data){
// 			if(err) console.error('There was an error with 3', err);

// 			console.log(data);
// 		});
// 	});
// });


// //============JUGGLING ASYNC=========

// //============TIME SERVER=========

// var net = require('net');

// var server = net.createServer( function(socket){

// 	var date = new Date();

// 	socket.end(
// 		date.getFullYear() 
// 		+ '-'
// 		+ (date.getMonth() + 1)
// 		+ '-'
// 		+ date.getDate()
// 		+ ' '
// 		+ date.getHours()
// 		+ ':'
// 		+ date.getMinutes()
// 		+ '\n'
// 		);

// });

// server.listen(process.argv[2]);

// //============TIME SERVER=========

// //============HTTP FILE SERVER=========

// var http = require('http');

// var fs = require('fs');

// var server = http.createServer(function(request, response){

// 	var fileStream = fs.createReadStream(process.argv[3]);

// 	fileStream.pipe(response);

// });

// server.listen(process.argv[2]);

// //============HTTP FILE SERVER=========

// //============HTTP UPPERCASERER=========

// var http = require('http');

// //var map = require('through2-map');

// var server = http.createServer(function(request, response){

// 	console.log(request.method);
// 	if(request.method == 'POST'){
// 		request.setEncoding('utf8');
// 		request.on('data', function(chunk){
// 			response.write(chunk.toUpperCase());
// 		}).on('end', function(){
// 			response.end();
// 		});
// 	}

// });

// server.listen(process.argv[2]);

// //============HTTP UPPERCASERER=========

//============	HTTP JASON API SERVER =========

var http = require('http'); 

var url = require('url');

var server = http.createServer(function(request, response){

	if(request.method == 'GET'){
		var urlObj = url.parse(request.url, true);
		response.writeHead(200, {'Content-Type': 'application/json'});

		if(urlObj.pathname == '/api/parsetime'){
			//Do something
			//console.log('parsetime works');
			//console.log(returnParseTime(urlObj.query));
			response.write(JSON.stringify(returnParseTime(urlObj.query)));
			response.end()
		}else if(urlObj.pathname == '/api/unixtime'){
			//Do something else
			//console.log('unixtime works');
			//console.log(returnUnixTime(urlObj.query));
			response.write(JSON.stringify(returnUnixTime(urlObj.query)));
			response.end();
		}

	}

});

server.listen(process.argv[2]);

function returnParseTime(time){
	//console.log(time.iso);
	time = time.iso;
	time = time.split('T')[1];
	time = time.split('.')[0];
	time = time.split(':');
	//console.log(time);
	return {
		'hour': 24 - +time[0],
		'minute': +time[1],
		'second': +time[2]
	}
}

function returnUnixTime(time){
	//console.log(time.iso);
	time = time.iso;
	//console.log(time.iso)
	time = time.replace('-','').replace('-','');
	//console.log(time);
	time = time.replace('T','');
	//console.log(time);
	time = time.replace(':','').replace(':','');
	//console.log(time);
	time = time.replace('Z','');
	//console.log(time);
	time = time.replace('.', '');

	var tempTime = new Date();

	console.log(tempTime.toString());


	//NOT QUITE RIGHT
	return {
		'unixtime': +time }
}

//============	HTTP JASON API SERVER =========



































