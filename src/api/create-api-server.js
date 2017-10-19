import * as contentful from 'contentful';

export function createAPI () {
  let api;
  api = process.__API__ = contentful.createClient({
    accessToken: process.env.ACCESS_TOKEN,
    space: process.env.SPACE_ID
  });
  return api;
}