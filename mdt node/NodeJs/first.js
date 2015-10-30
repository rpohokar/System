var num=123456789;
var rem=0;
var arr=[];
var add=0;
var sum=0;

while(num>0){
rem=num%10;
num=Math.round(num/10);
arr.push(rem);
}

for(var i=0;i<arr.length;i++){
if(arr[i]%2==0)
{
	console.log("*****" + arr[i]);
	 add= add+arr[i];
}
else 
{
	console.log("@@@@@" + arr[i]);
	sum=sum+arr[i];
}
}
console.log(add);
console.log(sum);

if(add>sum)
{
	console.log("*" + add + "*");
}
else
{
	console.log("@" + sum + "@");
}
