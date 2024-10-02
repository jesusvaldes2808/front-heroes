const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('data.json'); // tu archivo JSON
const middlewares = jsonServer.defaults();

// Middleware para autenticación
server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
