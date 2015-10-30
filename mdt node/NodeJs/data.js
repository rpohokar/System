
var data = require('ArrayList');
var list1 = new data;
var num = 10,max=20, a= 2, flag = 0;

if(num>0&&num<max){
for(var i=2;i<num;i++)
  {
   var isPrime=true;
        for(var j=2;j<i;j++){
	 	   if(i%j==0){
		 		isPrime=false;
		 		break;
	 	}
    }
 if(isPrime)
  {
 	console.log(i + "");
 	list1.push(i);
 }
}
console.log("*****" + list1);

if(num > 2)
	{
		while(num/2 > a)
		{
			if(num%a == 0)
			{
				flag = 1;
				break;
			}
			else{
				a++;
			}
		}

	}
if(flag == 1){
		console.log(i + " not prime number...");
	}
	else{
	
		console.log(i + " is prime number..." );
	}
	
var list2 = new data;
for(var k=num;k<max;k++)
   {
    	var isPrime=true;
        for(var j=2;j<k;j++){
		 	if(k%j==0){
			 		isPrime=false;
			 		break;
		 	}
        }
 if(isPrime)
	 {
	 	console.log(k + "");
	 	list2.push(k);
	 }
 }
console.log("*****" + list2);
}
else
{
	console.log("Not in range");
}

console.log(list1);
console.log(list2);
var list3=new data;

for(var p=0;p<list1.length;p++)
{
	for(var q=list2.length-1; q>=0 ;q--)
     {

     	var add = 0;
     	add=list1[p]+list2[q];
     	list3.push(add);
        break;
     }
    
/*list2.get(list2.size()-1);
console.log(list2);*/
}
console.log(list3);