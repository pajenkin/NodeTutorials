


/*============== first Async File Read ===========*/
// module.exports = function ( dir, extsub, callback){

// 	//if(err) return callback(err);

// 	var path = require('path');

// 	var fs = require('fs');

// 	fs.readdir( dir, function(err, list){
// 		if(err) return callback(err);

// 		var returnData = [];  

// 		var ext = '.' + extsub;

// 		// for(i in list){
// 		// 	if( path.extname(list[i]) == ext ){
// 		// 		returnData.push(list[i]);
// 		// 	}
// 		// }


// 		//Proper way of filtering a list?
// 		list = list.filter( function( file ){
// 			return path.extname(file) === ext;
// 		})

// 		callback( null , list);
// 	});

// }
/*============== first Async File Read ===========*/

/*============== JUGGLING ASYNC MOD===========*/
module.exports = function ( url, callback){

	var http = require('http');

	http.get(url, function(response){
		var total = '';
		response.setEncoding('utf8')
		response.on('data', function(data){
			//console.log(data);
			total += data;
		}).on('end', function(){
			//console.log(total);
			return callback(null, total);
		});
	})

}
/*============== JUGGLING ASYNC MOD===========*/























