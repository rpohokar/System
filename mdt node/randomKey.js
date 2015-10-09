

//random key generation
var map={};
for(var i=0;i<5;i++){
var item=generateRandomString();
var value=generateRandomString();
map[item]=value;
};

for(var i in map)
{
	console.log("Key :" + i + ",Value :" + map[i]);
}

function generateRandomString()
{
	var randomString="";
	var randomStringSource="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for(var i=0;i<5;i++){
		randomString +=randomStringSource.charAt(Math.floor(Math.random()*randomStringSource.length));
	}

	return randomString;
}