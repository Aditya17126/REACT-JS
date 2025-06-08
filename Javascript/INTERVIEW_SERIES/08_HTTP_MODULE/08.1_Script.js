const http = require("http");

const server = http.createServer((req , res) =>{
  res.end("HELLO ADITYA GUPTA SETH");
})

const port = 3001;

server.listen( port ,function(){
  console.log(`Server listening on port ${port}`);
})