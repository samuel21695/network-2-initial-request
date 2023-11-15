const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>  {
  if (req.url === "/" && req.method === 'GET') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(data);
    })
  }
  console.log("URL로 최초접속하는 트랜잭션 확인하기");
  console.log(req.url);
  console.log("URL로 최초접속하는 요청 유형 확인나기");
  console.log(req.method);
})

server.listen(3000, () => {
  console.log(`server running : http://localhost:3000/`)
})