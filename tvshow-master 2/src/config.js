const BASE_API = "http://api.tvmaze.com";
var config = {
  BASE_API, // put env varibles : process.env.BASE_API
  SEARCH_API: `${BASE_API}/search/shows?q=`
};

export default config;
