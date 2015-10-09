var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var str = [];
var sorted_data = [];

        var a = [];
        a['abcd']=2;
        a['cdba']=3;
        a['ABCD']=4;
        a['dbcd']=5;
        a['1234']=6;
        a['456abc']=7;
        a['CCDD']=8;

        for (var i in a) {
        console.log(i);

        fs.appendFile('data.txt', i + '\r\n',function(err){
			if(err){
		 			console.log(err);
		 			return;
		 	    }
		 	});
        
        }
        
        var instream = fs.createReadStream('data.txt');
        var outstream = new stream;
        var rl = readline.createInterface(instream, outstream);
       

        rl.on('line', function(line) {
        str.push(line);
       
	    sorted_data = str.sort();
         fs.appendFile('sorted.txt',sorted_data + '\r\n',function(err){
			if(err){
		 			console.log(err);
		 			return;
		 	    }
		 	});

       
         });  
          rl.on('close' ,function() {});


         

      
	   
       



       
      