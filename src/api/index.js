// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api';
require('dotenv').config();
// const logRequests = !!process.env.DEBUG_API;
// console.log(process.env.SPACE_ID, process.env.ACCESS_TOKEN);

const api = createAPI({
  SPACE_ID: process.env.SPACE_ID,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN
});

/*
------------------------------------------
| init:void (-)
|
| Method Notes
------------------------------------------ */
export function init(){
  return getContentTypes()
    .then(fetchEntries)
    .then((entries) => {
      return entries;
    })
    .catch((error) => {
      if (error.stack) {
        console.error(error.stack);
        return;
      }
      console.error(error);
    });
}

export function getContentTypes () {
  return fetchContentTypes()
    .then((contentTypes) => {
      return contentTypes;
    });
}

export function fetchEntries (contentTypes) {
  return Promise.all(contentTypes.map((contentType) => {
    return fetchEntriesForContentType(contentType)
      .then((entries) => {
        return entries;
      });
  }));
}

// Load all Content Types in your space from Contentful
export function fetchContentTypes () {
  return api.getContentTypes()
    .then((response) => response.items)
    .catch((error) => {
      console.error(error);
    });
}

// Load all entries for a given Content Type from Contentful
export function fetchEntriesForContentType (contentType) {
  return api.getEntries({
    content_type: contentType.sys.id
  })
    .then((response) => response.items)
    .catch((error) => {
      console.error(error);
    });
}
