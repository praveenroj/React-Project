// Request utils,
import "whatwg-fetch";

function requestWrapper(method) {
  return async (url, data = null, params = {}) => {
    if (method === "GET") {
      // is it a GET?
      // GET doesn't have data
      params = data; // eslint-disable-line
      data = null; // eslint-disable-line
    } else if (data === Object(data)) {
      data = JSON.stringify(data); // eslint-disable-line
    } else {
      throw new Error(`XHR invalid, check ${method} on ${url}`);
    }

    const defaults = {
      method,
    };

    if (data) {
      defaults.body = data;
    }

    const paramsObj = {
      ...defaults,
      headers: { ...params, ...defaults.headers }
    };

    return fetch(url, paramsObj)
      .then(async res => {
        const r = await res.json();
        return r;
      })
      .catch(err => {
        console.error(err); // eslint-disable-line
      });
  };
}

export const get = requestWrapper("GET");
export const post = requestWrapper("POST");
export const put = requestWrapper("PUT");
export const patch = requestWrapper("PATCH");
export const del = requestWrapper("DELETE");
