const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

const getJoke = async () => {
    try {
        const res = await request(options);
        return res.joke;
    } catch (error) {
        console.error("Error fetching joke:", error.message);
        throw error;
    }
};
  
module.exports = getJoke;