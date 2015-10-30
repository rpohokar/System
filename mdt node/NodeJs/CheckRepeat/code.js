var fs=require("fs");
var stream = require('stream');
var readline = require('readline');
var http = require('http');

var data=[];
var str=[];

       function fun(req, res){

        res.write('hello');
        res.end();

        var instream = fs.createReadStream('file.txt');
        var outstream = new stream;
        var rl = readline.createInterface(instream, outstream);
       
       
        rl.on('line', function(line) {
        str.push(line);
                           });

        rl.on('close' ,function() {});

            for(var i=0;i<str.length;i++)
            {
              var word=[];
              word=str[i].split("=");
              
              data.push(word[0]);
            }

          // console.log(data);
           for(var j = 0; j < data.length; j++)
           {
                  for(var k = j + 1; k < data.length; k++)
                  {
                      if(data[j]==data[k]){
                        
                          fs.appendFile('repeat.txt',data[j] + '\r\n',function(err){
                                  if(err){
                                    console.log(err);
                                    return;
                                  }
                          });

                      }
                   }
            }

   }

http.createServer(fun).listen(3000);
console.log('server running on port 3000');
  