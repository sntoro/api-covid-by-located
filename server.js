"use strict";
const { parsed } = require("dotenv").config();
const http = require("http");
const app = require("./app");
const port = parsed.PORT;
const url = parsed.URL;

const server = http.createServer(app);

server.listen(port, () => console.log(`App listening at ${url}:${port}`));
