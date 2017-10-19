import * as contentful from 'contentful';

export function createAPI () {
  let api;

  if( process.__API__ ){
    return process.__API__;
  } else {
    api = process.__API__ = contentful.createClient({
      accessToken: process.env.ACCESS_TOKEN,
      space: process.env.SPACE_ID
    });
  }
  return api;
}