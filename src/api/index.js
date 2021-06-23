const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
export const sendRequest = async (path, query, method = 'GET', body = {}, headers) => {
  //eslint-disable-next-line
  try {
    const requestUrl = `${baseUrl}/${path}?access_key=${apiKey}${query}`;
    const options = {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true,
        ...headers
      }
    }
    if (method === 'POST' || method === "PUT") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(requestUrl, options);


    const contentType = response.headers.get('Content-Type')
    if (contentType === 'application/json') {
      return await response.json();    // mapping[contentType]()
    }

    throw new Error('Unexpected content type')
  } catch (error) {
    throw error;
  }
}

export const generateQueryString = (data = {}) => {
  let query = '';

  Object.keys(data).forEach((key) => {
    query += `&${key}=${data[key]}`;
  })

  return query;
};
