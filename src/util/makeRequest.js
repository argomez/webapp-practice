const makeRequest = async (url, props = {}) => {
  // request data
  return new Promise((resolve, reject) => {
    fetch(url, props).then(response => {
      if(response.ok) {
        return resolve(response.json());
      } else {
        return reject({
          message: `Error fetching ${url}.`,
          response: response,
        });
      }
    }).catch(err => {
      return reject(err);
    });
  });
}

export default makeRequest;