const http = require('http');
http.createServer(function (req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    switch(req.url){
        case '/':
            res.end('Bienvenido a mi homepage');
            break;
        case '/index':
            res.end('Index: 1, 2, 3, 4');
            break;
        default:
            res.end('Error');
            break;
     };
}).listen(3030,'localhost');