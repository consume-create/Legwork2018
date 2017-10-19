import * as contentful from 'contentful';

export function createAPI () {
  const client = contentful.createClient({
    accessToken: process.env.ACCESS_TOKEN,
    space: process.env.SPACE_ID
  });
  return client;
}
