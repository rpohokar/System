var HashMap=require('hashmap');

//console print value
var map=new HashMap();
map.set("1","string one");
map.set("2","string 2");
map.set(1,"test 1");
map.set(2,"test 2");
map.set(3,"test 3");
map.set("key",123);
map.set("key2",321);
map.forEach(function(value,key){
	console.log(value);
});


//condition
var hash=require('hashish');

hash({a:5,b:6,c:7,d:8})
.map(function(x){
	return x*10
}).filter(function(x){
	return x<70
}).forEach(function(x,key){
	console.log(key + '=>' + x);
});


//expression
var obj={a:1,b:2,c:3,d:4,e:5};
var mapped=hash.map(obj,function(x){
	return x*10
});
console.dir(mapped);

//arrays=hashmaps
var a = [];
a['abc']=2;
a['123']=3;
a['rst']=4;
a['bca']=4;
for (var i in a) {
    console.log(i);
}