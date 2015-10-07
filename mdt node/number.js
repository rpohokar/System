var sys=require("sys");

var stdin = process.openStdin();
var num;

stdin.addListener("data",function(d){

	console.log("User Input:["+  d.toString().trim() + "]");
	num = d.toString().trim();
	

    var a=0;
    var b=0;
    while(num>0) 
 
    { 
         a = num % 10;
         b = b + a ;
         num = Math.round(num / 10) ;
    }
   
    console.log("Addition :" + b);
  });

     
     