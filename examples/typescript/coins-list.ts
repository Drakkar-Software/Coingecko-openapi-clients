import { CoingeckoAPIClient } from "../../client/typescript/index";

async function fetchCoinsList() {
  const client = new CoingeckoAPIClient({
    BASE: process.env.COINGECKO_BASE_URL || "https://api.coingecko.com/api/v3",
  });

  const coinsList = await client.coins.getCoinsList();
  console.log(coinsList);
}

fetchCoinsList();
