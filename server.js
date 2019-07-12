/*
const express = require('express');
const path = require('path');
const app = express();

app.get('/ping', function(req, res) {
  res.send('pong');
});

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Date": new Date()
  });

  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080, () => {
  console.log('success!');
});
*/

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();
const port = dev ? 3000 : 8080;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/", (req, res) => {
      app.render(req, res, "/index");
    });

    server.get("/auth", (req, res) => {
      app.render(req, res, "/auth");
    });

    server.get("/postlist", (req, res) => {
      app.render(req, res, "/postlist");
    });

    server.get("/post/:id", (req, res) => {
      const realPage = "/post";

      const params = { id: req.params.id };
      app.render(req, res, realPage, params);
    });

    server.get("/admin", (req, res) => {
      app.render(req, res, "/admin");
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:" + port);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
