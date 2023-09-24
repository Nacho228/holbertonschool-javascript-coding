#!/usr/bin/node
const request = require('request');
const apiurl = process.argv[2];

request.get(apiurl, (err, response, body) => {
  if (err) {
    console.error(err);
  }
  const DATA = JSON.parse(body);
  const todos = {};
  DATA.forEach(task => {
    const ID = task.userId;
    if (task.completed) {
      if (!todos[ID]) {
        todos[ID] = 1;
      } else {
        todos[ID]++;
      }
    }
  });
  console.log(todos);
});
