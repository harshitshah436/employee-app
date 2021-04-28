const request = require('request');
const path = require('path');

function getDate() {
  let date = new Date().toISOString().replace(/T/, ' ').replace(/Z/, '')
  return date;
}

function handleRequest(url, method) {
  var reqOptions = {
    url: url,
    method: method,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return new Promise((resolve, reject) => {
    console.log(`[${getDate()}]  ${path.basename(__filename)}  :  handleRequest()  :  Request: ${method} ${url}`);
    request(reqOptions, function (error, response, body) {
      if (error) {
        reject(error.message);
      } else {
        if (response.statusCode === 200) {
          resolve(body);
        } else {
          console.error("Got status code: " + response.statusCode);
          reject(body);
        }
      }
    });
  })
}

module.exports = {
  getDate,
  handleRequest
}