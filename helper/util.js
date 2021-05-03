const request = require('request');
const path = require('path');
const { nanoid } = require('nanoid')

/**
 * Get a current date.
 */
getDate = () => {
  let date = new Date().toISOString().replace(/T/, ' ').replace(/Z/, '')
  return date;
}

/**
 * This method handles http requests.
 */
handleRequest = (url, method) => {
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

/**
 * Generate a unique id of size 10.
 */
getUniqueNanoId = () => {
  var uniqueId = nanoid(10);
  return uniqueId;
}

module.exports = {
  getDate,
  handleRequest,
  getUniqueNanoId
}