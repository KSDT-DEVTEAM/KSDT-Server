const http = require('node:http');

const server = http.createServer((request,response) => {
    const { headers, method } = request; 
    let body = [];

    request
        .on('error', err => {
            //FILL THIS OUT
        })
        .on('data', chunk => {
            //FILL THIS OUT
        })
        .on('end', () =>{
            //FILL THIS OUT. THIS IS WHERE YOUR MESSAGE IS SENT
        });
        
});

server.listen(8080, () => {
    console.log('server running at 8080');
});