// we basically set our web address, only can access it on a local pc http://localhost:8000
const http = require("http");
const host = 'localhost';
const port = 8000;

// listens to user requests, req = the user requesting, res is what we send back
//200 = "OK"  then text
const requestListener = function (req, res)
{
    res.writeHead(200);
    res.end("Hopefully my first server for my first website!");
}

// actually creates the server and passes the requestListener function 
const server = http.createServer(requestListener);

//listens to the port and lets you know the server is running 
server.listen(port, host, () =>
{
    console.log('Server is running on http://localhost:8000');
});

