const fs = require('fs')
const streams = require('memory-streams')
const writer = new streams.WritableStream()

/*
 ------------------------------------------
 | init:void (-)
 |
 | Method Notes
 ------------------------------------------ */
export function init() {
  console.trace()

  if (writer.toString() === '' || process.env.NODE_ENV === 'development') {
    return new Promise((resolve) => {
      let rawdata = fs.readFileSync('public/data.json')
      writer.write(rawdata)
      resolve(JSON.parse(rawdata))
    })
  } else {
    return new Promise((resolve) => {
      const cache = JSON.parse(writer.toString())
      resolve(cache)
    })
  }
}
