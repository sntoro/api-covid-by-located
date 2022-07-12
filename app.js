'use strict'

const { parsed } = require("dotenv").config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const axios = require("axios").default;
const url_api = parsed.URL_JSON;

app.get("/getData", (req, res, next) => {
    axios
      .get(url_api)
      .then(function (response) {
        res.status(200).send({
          data: response.data,
        });
  
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  });

module.exports = app;