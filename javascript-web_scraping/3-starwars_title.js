#!/usr/bin/node
const request = require('request');
const movieID = process.argv[2];
const apiurl = `https://swapi-api.hbtn.io/api/films/${movieID}`;

request.get(apiurl, (error, Response, body) => {
  if (error) {
    console.error(error);
  } else if (Response.statusCode !== 200) {
    console.error(error);
  } else {
    try {
      const moviedata = JSON.parse(body);
      console.log(moviedata.title);
    } catch (parseError) {
      console.error(parseError);
    }
  }
});
