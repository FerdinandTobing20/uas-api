const jsonServer = require('json-server');        // Import JSON Server
const server = jsonServer.create();               // Buat server
const router = jsonServer.router('db.json');      // Load data dari db.json
const middlewares = jsonServer.defaults();        // Gunakan middleware bawaan
const PORT = process.env.PORT || 3000;            // Port dari Render

server.use(middlewares);                          // Pasang middleware
server.use(router);                               // Pasang router (API-nya)

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
