import { CoingeckoAPIClient } from "../../client/typescript/index";

async function fetchCategoryList() {
  const client = new CoingeckoAPIClient({
    BASE: process.env.COINGECKO_BASE_URL || "https://api.coingecko.com/api/v3",
    HEADERS: { "x-cg-demo-api-key": "YOUR-API-KEY" }
  });

  const categoryList = await client.categories.getCoinsCategoriesList()
  console.log(categoryList);

  const categories = await client.categories.getCoinsCategories()
  console.log(categories);
}

fetchCategoryList();
