
var http = require('http');
var fs = require('fs');

var ninjas = [{name: 'ryu', age: 29, id: 1}, {name: 'anze', age: 23, id: 2}];





var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/ninjas/1'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas[0]));
    } else if(req.url === '/api/ninjas/2'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas[1]));
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/error.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log("It works, listening to port 3000");

