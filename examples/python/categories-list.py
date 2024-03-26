import asyncio
import coingecko_openapi_client

async def fetchCategoryList():
  api_client = coingecko_openapi_client.ApiClient()
  client = coingecko_openapi_client.api.categories_api.CategoriesApi(api_client)

  categoryList = await client.coins_categories_list_get()
  print(categoryList)

  categories = await client.coins_categories_get()
  print(categories)

loop = asyncio.get_event_loop()
print(loop.run_until_complete(fetchCategoryList()))

