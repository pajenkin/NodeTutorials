
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

var fs = require('fs');

var directory = process.argv[2];

fs.readdir(directory , function(err, list){
	if(err) throw err;
	
})

//============FILTERED LS=========














