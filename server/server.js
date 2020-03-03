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

// # Crypto Currency Tracker

// This is a project for the NM assesment that is a fullstack application that uses my backend as an api to fetch cryptocurrency data from
// [CoinMarketCapAPI](https://coinmarketcap.com/api/)
// ## Getting Started

// These instructions will get you a copy of the project up and running on your local machine for the assesment. See deployment for notes on how to deploy the project on a live system.

// ### Installing
// From Root
// ```
// cd server npm run dev

// ```
// Running this command will take a bit and may show an intial crash because it is npm installing for you through the scripts :) just give it about a minute and it should be working fine

// ## Built With

// * [Node.js](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
// * [Express](https://expressjs.com/) - Used with Node
// * [React](https://reactjs.org/) - Used as my front-end-framework
// * [Material-Ui](https://material-ui.com/) - Used mainly for the searchbar
// * [Styled-Components](https://styled-components.com/) - Used because who doesnt love styled-components :D

// ## License

// This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

// ## Acknowledgments

// * Inspiration: Northwester deals with fintech so i decided to use something with crypto!
