#!/usr/bin/node
const fs = require('fs');
const filepath = process.argv[2];
const str = process.argv[3];

fs.writeFile(filepath, str, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
