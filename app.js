const http = require("http");

const server = http.createServer((req, res) =>  {

  console.log("URL로 최초접속하는 트랜잭션 확인하기");
  console.log(req.url);
  console.log("URL로 최초접속하는 요청 유형 확이나기");
  console.log(req.method);
})