var newfile= require('./arraylist1.js');
var data = require('ArrayList');

var list = new data;
for(var i=1;i<=5;i++)
	{
		newfile.setFirstName('Rasika' + i);
		newfile.setLastName('Pohokar' + i);
		var a=newfile.getPersonInfo();
		list.push(a);
	}

var list1 = new data;
for(var j=1;j<=5;j++)
	{
		newfile.setFirstName('Amar' + j);
		newfile.setLastName('Thakre' + j);
		var b=newfile.getPersonInfo();
		list1.push(b);
	}
newfile.setFirstName('Rasika1');
newfile.setLastName('Pohokar1');
var c=newfile.getPersonInfo();
list1.push(c);

for(var k=0;k<list.length;k++)
{
	for(var h=0;h<list1.length;h++)
	{
		if(list[k].FirstName==list1[h].FirstName && list[k].LastName==list1[h].LastName)
			{
				console.log(list[k].FirstName);
				console.log(list[k].LastName);
			}
	}
}

