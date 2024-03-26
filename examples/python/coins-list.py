import asyncio
import coingecko_openapi_client

async def fetchCoinsList():
  api_client = coingecko_openapi_client.ApiClient()
  client = coingecko_openapi_client.api.coins_api.CoinsApi(api_client)
  return await client.coins_markets_get(vs_currency='usd', category='layer-1', per_page=10)

loop = asyncio.get_event_loop()
print(loop.run_until_complete(fetchCoinsList()))
