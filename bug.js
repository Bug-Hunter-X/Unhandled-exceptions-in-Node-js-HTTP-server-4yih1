const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});