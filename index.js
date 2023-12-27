var http = require('http');
var data = require("./test");
var url = require('url');
// require('dotenv').config(); OR
const dotenv = require('dotenv');
dotenv.config();

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    // res.writeHead(200,{'Content-Type':'application/json'})
    res.write('<h1>RAIT</h1>' + data.testModule())
    res.write("<br>")
    // res.write(req.url)
    var query = url.parse(req.url,true).query;
    console.log(query)
    res.end('<h3>Welcome to rait...</h3>')
    console.log(process.env.PORT)
}).listen(process.env.PORT  || 5010);