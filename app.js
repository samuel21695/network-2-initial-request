const http = require("http");

const server = http.createServer((req, res) =>  {

  console.log("URL로 최초접속하는 트랜잭션 확인하기");
  console.log(req.url);
})