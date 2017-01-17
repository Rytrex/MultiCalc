
//----------------------------------------------------------
//--------------------Node.js Server------------------------
//----------------------------------------------------------

//---------Requires----------
var fs = require("fs")
var http = require("http")
var bodyParser = require('body-parser')
var express = require("express")
var jsonReader = require("../path/jsonfile.json");

//Used for body-parser
var urlencodedParser = bodyParser.urlencoded({extended:false})

//Initial setup for reading old equations from previous sessions
var jsonData = fs.readFileSync("data.txt", "utf8")
var previousEquations = JSON.parse(jsonData)
console.log(jsonData + previousEquations)

//---------Server------------
var server = express()
server.get('/', function(request, response){
  console.log("Sent index.html")
  response.sendFile(__dirname + "/_site/index.html")
})
server.use('/assets', express.static('_site/assets'))

server.post('/', urlencodedParser, function(request, response) {
  console.log(request.body.equation)
  fs.writeFileSync("data.txt", JSON.stringify(request.body))
});


server.listen(3000, '127.0.0.1')
console.log('Listening for requests')
