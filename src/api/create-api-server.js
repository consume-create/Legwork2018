import LRU from 'lru-cache';
import "contentful" from "contentful";

export function createAPI ({ SPACE_ID, ACCESS_TOKEN }) {
  let api;
  // this piece of code may run multiple times in development mode,
  // so we attach the instantiated API to `process` to avoid duplications
  if (process.__API__) {
    api = process.__API__;
  } else {
  	
  }
  return api;
}