var http = require('http');
var data = require('./test')
var url = require('url');
// require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();

http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type': 'application/json'});
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h1>RAIT</h1>" + data.testModule())
    res.write("<br>")
    var query = url.parse(req.url,true).query;
    // res.write(query)
    console.log(query)
    res.end('<h3>welcome to rait...</h3>')
    console.log(process.env.PORT)
}).listen(process.env.PORT || 5000);