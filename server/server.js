const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config/config.env" }); // .env files
const fetch = require("node-fetch");

const PORT = process.env.PORT || 5000;

// Request Headers
const requestOptions = {
  method: "GET",
  uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  limit: 100,
  qs: {
    symbol: "BTC,USDT,BNB"
  },
  headers: {
    "X-CMC_PRO_API_KEY":
      "bd4db3bf-6771-4e0c-9056-e0d5b85aea49 " || process.env.API_KEY //This is very very bad i would never leave an api key or sensitive information in a file it would always go in a .env file will remove after interview
  },
  json: true,
  gzip: true
};

// This function gets the data from an external api
async function getData() {
  const uri = requestOptions.uri;
  try {
    const data = await fetch(uri, requestOptions);
    const response = await data.json();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Currently set to * for public access
app.use(cors());

//Routes
app.get("/api/data", async (req, res) => {
  res.send(await getData());
});

// app.post("/", (req, res) => {
//   // If i were to make a post request this is what i would do
//   // req.body({data: something})
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} !`);
});

