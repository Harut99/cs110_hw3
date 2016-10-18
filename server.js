const http = require('http');

const httpServer = http.createServer(function (req, res)
{
	if (req.url === '/do'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Nike');
	res.end('Adidas su..');
 
 }
	else if (req.url === '/re'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('AUA');
	res.end('2020');
 }
	else if (req.url === '/mi'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('DMX');
	res.end('YoYo');
 }
	else if (req.url === '/fa'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('HS');
	res.end('Controlwar');
	}
	else if (req.url === '/Music'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Relax');
	res.end('Subtract-filling');
 }
});
httpServer.listen(3001);