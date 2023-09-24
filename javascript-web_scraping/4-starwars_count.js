#!/usr/bin/node
const request = require('request');
const apiurl = process.argv[2];

request.get(apiurl, (error, Response, body) => {
  if (error) {
    console.error(error);
  }
  const filmdata = JSON.parse(body);
  const wedgeantillesappearences = filmdata.results.filter(film =>
    film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')
  );
  console.log(`${wedgeantillesappearences.length}`);
});
