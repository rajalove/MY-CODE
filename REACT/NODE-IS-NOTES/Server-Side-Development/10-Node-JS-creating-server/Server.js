const http=require('http');

const hostName='127.0.0.1';
const port=5000;

const server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');
 response.end(`<h1> welcome to node js </h1>`);
});

server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})