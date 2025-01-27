const http = require('http');

const server = http.createServer((req, res) => {
  try {
    //Simulate an error
    //const data = fs.readFileSync('nonexistentfile.txt');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
}).on('error', err => {
  console.error('Server failed to start:', err);
});