var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var http=require("http");
var str=[];
http.createServer(function(request, response){
	response.writeHead(200,{"Context-Type": "text/plain"});
	response.end("Hello World\n");

        var instream = fs.createReadStream('array.txt');
        var outstream = new stream;
        var rl = readline.createInterface(instream, outstream);
       

        rl.on('line', function(line) {
        str.push(line);
            });  
        rl.on('close' ,function() {});
        
        var sorted_data = [];
		sorted_data= str.sort(function(a,b){return b-a});
		fs.appendFile('desc.txt',sorted_data + '\r\n',function(err){
			if(err){
		 			console.log(err);
		 			return;
		 	    }
		 	});
        
        var sort_asc = [];
		sort_asc=str.sort(function(c,d){return c-d});
		fs.appendFile('asc.txt',sort_asc + '\r\n',function(err){
		 		if(err){
					console.log(err);
		 			return;
			    }
		 	});
        
        }).listen(8081);
    console.log("Server running at http://127.0.0.1:8081");



		

       
	


		
        