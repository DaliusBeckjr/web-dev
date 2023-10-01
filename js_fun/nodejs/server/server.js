const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html'; // appending the path to the index.html file
            res.statusCode = 200; //ok
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200; // ok
            break;
        case '/about-me':
            res.statusCode = 301; // redirect
            res.setHeader('location', '/about');
            res.end(); 
            break;
        default: // go do more research on switch statements again. kinda like nested for loops bu default is throwing me off here...
            path += '404.html';
            res.statusCode = 404; // 404
            break;
    }

    // send html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // res.write(data); // if we are sending one thing we can put it in the end method
            res.end(data);
        }
    })
});

server.listen(port = 3000, host = 'localhost', () => {
    console.log('listening for request on port 3000')
    console.log(`http://${host}:${port}`);
}); // 3000 is the port number of the rserver