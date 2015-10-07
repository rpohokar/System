//Split string
var str='Welcome,PlmLogix ';
console.log("String :" + str);

console.log("After Spliting string :" + str.split(",")[0]);

//Concat string
var a='India';
var b=str.concat(a);
console.log("After concatenation :" + b);


//append data in file at new line
var fs=require("fs");
var addData='\r\nPlmLogix';

fs.readFile('index.txt','utf-8',function(err,data){
		if(err){
			console.log(err);
			return;
		}
	console.log("Write into existing file index.txt");

	fs.appendFile('index.txt',addData,function(err){
			if(err){
				console.log(err);
				return;
		    }

		//write data in file & get position of substring
		var str='welcome in PlmLogix Baner, Pune.';
		fs.writeFile('string.txt',str , function (err) {
			  if (err) {
			    console.log(err);
			  	return;
			  	}
			console.log("Data added successfully in string.txt");
			console.log("Open file string.txt");
			var pos=str.search('ne');
			console.log("Substring 'ne' at position :" + pos);
			});
		});
});


