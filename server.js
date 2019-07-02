const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = dev ? 3000 : 8080; 

app.prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => {
      app.render(req, res, '/index');
    });

    server.get('/auth', (req, res) => {
      app.render(req, res, '/auth');
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:'+port);
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });