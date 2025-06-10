import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';


//he http.createServer function creates an HTTP server

/*Callback Function: The function passed to 'http.createServer' is a request 
listener, executed whenever the server receives a request. It has two parameters:
request: Represents the HTTP request, containing information 
like the URL, headers, and method (GET, POST, etc.).
response: Represents the HTTP response that the server sends back to the client*/ 
const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

//WebSocketServer: This is a class provided by the ws library to create a WebSocket server.
//The { server } in the code refers to the server variable, 
//which is an instance of an HTTP server created earlier (likely using http.createServer).
const wss = new WebSocketServer({ server });

//wss.on('connection', callback): This event is triggered 
//whenever a new WebSocket client connects to the server.
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
//ws.on('message', function message(data, isBinary) {...}): 
//This listens for the message event, triggered whenever a message is received from the client
  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});