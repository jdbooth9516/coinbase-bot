const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const CoinbasePro = require("coinbase-pro");

const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.listen(port, () => console.log(`Server started on port ${port}`));

const publicClient = new CoinbasePro.PublicClient();


async function getOneDay () {
  try {
     const oneDay = await publicClient.getProduct24HrStats('BTC-USD');
     console.log(oneDay);
  } catch (error) { 
    console.log(error);
  };
}

getOneDay(); 




