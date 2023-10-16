from http.server import BaseHTTPRequestHandler, HTTPServer

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

  def do_GET(self):
    print("URL로 최초접속하는 트랜잭션 확인하기")
    print(self.path)