import { CoingeckoAPIClient } from "../../client/typescript/index";

async function fetchCoinsList() {
  const client = new CoingeckoAPIClient({
    BASE: process.env.COINGECKO_BASE_URL || "https://api.coingecko.com/api/v3",
  });

  // fetch top 10 layer-1 coins
  const categoryCoinsList = await client.coins.getCoinsMarkets('usd', undefined, 'layer-1', undefined, 10)
  console.log(categoryCoinsList);
}

fetchCoinsList();
