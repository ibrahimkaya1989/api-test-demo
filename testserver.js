import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Accept', 'application/json');
    res.end('{ "project":"Hello World", "author":"İbrahim Kaya", "email":"ibrahim.kaya@kafein.com.tr", "company":"Kafein Solutions", "title":"Test Engineer", "description":"Testing on API, Android & iOS Devices, WEB" }');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});