var fs = require('fs');

var str=[56,78,23,12,90,2,3];
fs.writeFile('string.txt',str , function (err) {
        if (err) {
          console.log(err);
          return;
          }
          });

var sorted_data = [];
sorted_data= str.sort(function(a,b){return b-a});
console.log("Descending sort :" + sorted_data);

     fs.appendFile('desc.txt',sorted_data + '\r\n',function(err){
      if(err){
        console.log(err);
         return;
          }
     });

       
    console.log("Descending sort is done..");

 var sort_asc =[];
 sort_asc=str.sort(function(c, d){return c-d});
 console.log("Ascending sort :" + sort_asc);
     
      fs.appendFile('asc.txt',sort_asc + '\r\n',function(err){
       if(err){
         console.log(err);
         return;
         }
     });

      
      console.log("Ascending sort is done..");


   
        
   