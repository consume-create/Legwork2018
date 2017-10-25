import request from 'request';

/*
------------------------------------------
| init:void (-)
|
| Method Notes
------------------------------------------ */
export function init(){
  return new Promise( (resolve, reject) => { 
    request({
      url: 'http://assets.legwork.studio/data/project.json',
      json: true
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}
