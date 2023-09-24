#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filepath = process.argv[3];

request.get(url, 'utf-8', (error, Response, data) => {
  if (error) {
    console.error(error);
  } else if (Response.statusCode !== 200) {
    console.error(error);
  } else {
    fs.writeFile(filepath, data, 'utf-8', err => {
      if (err) {
        console.error(err);
      }
    });
  }
});
