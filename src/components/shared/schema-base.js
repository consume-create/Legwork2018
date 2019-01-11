/*
*
* Schema Base 
* - defines base schema components to be used. 
*
*/

export default {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type":"object",
  "definitions": {
    "image": {
      "title" : "Image",
      "type": "object",
      "properties": {
        "filename": { "type": "string"},
        "url": { "type": "string", "format": "uri"},
        "mimetype": {"type": "string"},
        "date": {"type": "string", "format": "date-time"},
        "type": {"type": "string"},
        "width": {"type": "number"},
        "height": {"type": "number"}
      },
      "required": ["url", "mimetype"]
    },
    "video": {
      "title" : "Video",
      "type": "object",
      "properties": {
        "filename": { "type": "string"},
        "url": { "type": "string", "format": "uri"},
        "videoId": {"type": "number"},
        "mimetype": {"type": "string"},
        "date": {"type": "string", "format": "date-time"},
        "type": {"type": "string"},
        "width": {"type": "number"},
        "height": {"type": "number"}
      },
      "required": ["videoId", "mimetype"]
    },
    "award": {
      "title" : "Award",
      "description": "Inline SVG for award shown in the recognition section.",
      "type": "string",
      "pattern": "^<svg.+</svg>$"
    },
    "headline": {
      "title" : "Headline",
      "type": "string",
    },
    "copy": {
      "title": "Copy",
      "type": "string",
      "description": "Copy that goes beneath the headline, alongside a media gallery or in a caption."
    }
  }
}