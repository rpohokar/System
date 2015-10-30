
var http=require("http");

http.createServer(function(request, response){
	response.end("Hello World\n");
   
var str='1234 4321';
var arr=[];
var add=0;
var stre=str.split(' ');
var stre=str.split(' ').join('');
console.log(stre);

while(stre>0){
rem=stre%10;
stre=Math.round(stre/10);
arr.push(rem);
}
console.log(arr);
var num = 1;
  var n;

for(var i=0;i<arr.length;i++)
{
	/*console.log(arr[i]);
	var j=0;
    add=add+arr[i]*Math.pow(2,i);*/
  n = i;
  	if(n != 0){
      	while(n > 0)
    	{
			num = num * 2; 
			n--;
    	}
    }
  
  	add =add + (arr[i] * num);  	
}
console.log(add);


}).listen(8081);
console.log("Server running at http://127.0.0.1:8081");

/*var num = 3;
var n = 1;

while(num > 0)
    	{
			n = n * 2; 
			num--;
    	} 

   console.log(n);*/