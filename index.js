'use strict';

const http = require('http');
const hostname = "127.0.0.1";
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

const rootController = (request, response) => {
    const snippet = `<h1>Hello World!</h1>`;

    response
        .status(200)
        .send(snippet)
        .end();
}

app.get('/', rootController);

app.get('/cats', (request, response) => {
    response
        .status(200)
        .send(`<h1>Meow!</h1>`)
        .end();
});

app.get('/dogs', (request, response) => {
    response
        .status(200)
        .send(`<h1>Woof!</h1>`)
        .end();
});

app.get('/cats_and_dogs', (request, response) => {
    response
        .status(200)
        .send(`<h1>Dogs and cats living together...mass hysteria!!</h1>`)
        .end();
});