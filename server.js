const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

function main(){
    try {
        const server = http.createServer(function(req,res){
            res.statusCode = 200;
            res.setHeader('Content-type','text/plain');
            res.end('Hello World');
        });
        
        server.listen(port,hostname,()=>{
            console.log('Server On');
            console.log('Listening on port: ',port,' and host: ',hostname );
        });
    } catch (error) {
        console.error('Error on creating server');
    }
}
main();








