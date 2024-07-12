const route = require('./routes')

const server = http.createServer(route);

server.listen(3000, "localhost");
