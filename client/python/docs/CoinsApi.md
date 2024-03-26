# coingecko_openapi_client.CoinsApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coins_id_get**](CoinsApi.md#coins_id_get) | **GET** /coins/{id} | Get current data (name, price, market, ... including exchange tickers) for a coin
[**coins_id_history_get**](CoinsApi.md#coins_id_history_get) | **GET** /coins/{id}/history | Get historical data (price, market cap, 24hr volume, ..) at a given date for a coin.
[**coins_id_market_chart_get**](CoinsApi.md#coins_id_market_chart_get) | **GET** /coins/{id}/market_chart | Get historical market data include price, market cap, and 24h volume (granularity auto)
[**coins_id_market_chart_range_get**](CoinsApi.md#coins_id_market_chart_range_get) | **GET** /coins/{id}/market_chart/range | Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
[**coins_id_ohlc_get**](CoinsApi.md#coins_id_ohlc_get) | **GET** /coins/{id}/ohlc | Get coin&#39;s OHLC
[**coins_id_tickers_get**](CoinsApi.md#coins_id_tickers_get) | **GET** /coins/{id}/tickers | Get coin tickers (paginated to 100 items)
[**coins_list_get**](CoinsApi.md#coins_list_get) | **GET** /coins/list | List all supported coins id, name and symbol (no pagination required)
[**coins_markets_get**](CoinsApi.md#coins_markets_get) | **GET** /coins/markets | List all supported coins price, market cap, volume, and market related data


# **coins_id_get**
> coins_id_get(id, localization=localization, tickers=tickers, market_data=market_data, community_data=community_data, developer_data=developer_data, sparkline=sparkline)

Get current data (name, price, market, ... including exchange tickers) for a coin

Get current data (name, price, market, ... including exchange tickers) for a coin.<br><br> **IMPORTANT**:  Ticker object is limited to 100 items, to get more tickers, use `/coins/{id}/tickers`  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for more than 8 hours.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)  Note: to check if a price is stale, please refer to `last_updated` of the price.  Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li><li><strong>timestamp</strong>: returns the last time that the price has changed</li><li><strong>last_traded_at</strong>: returns the last time that the price has changed</li><li><strong>last_fetch_at</strong>: returns the last time we call the API</li>  Cache / Update Frequency: every 60 seconds Data for Twitter, Telegram and Reddit will be updated on daily basis.

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CoinsApi()
id = 'id_example' # str | pass the coin id (can be obtained from /coins) eg. bitcoin
localization = 'localization_example' # str | Include all localized languages in response (true/false) <b>[default: true]</b> (optional)
tickers = true # bool | Include tickers data (true/false) <b>[default: true]</b> (optional)
market_data = true # bool | Include market_data (true/false) <b>[default: true]</b> (optional)
community_data = true # bool | Include community_data data (true/false) <b>[default: true]</b> (optional)
developer_data = true # bool | Include developer_data data (true/false) <b>[default: true]</b> (optional)
sparkline = true # bool | Include sparkline 7 days data (eg. true, false) <b>[default: false]</b> (optional)

try:
    # Get current data (name, price, market, ... including exchange tickers) for a coin
    api_instance.coins_id_get(id, localization=localization, tickers=tickers, market_data=market_data, community_data=community_data, developer_data=developer_data, sparkline=sparkline)
except ApiException as e:
    print("Exception when calling CoinsApi->coins_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| pass the coin id (can be obtained from /coins) eg. bitcoin | 
 **localization** | **str**| Include all localized languages in response (true/false) &lt;b&gt;[default: true]&lt;/b&gt; | [optional] 
 **tickers** | **bool**| Include tickers data (true/false) &lt;b&gt;[default: true]&lt;/b&gt; | [optional] 
 **market_data** | **bool**| Include market_data (true/false) &lt;b&gt;[default: true]&lt;/b&gt; | [optional] 
 **community_data** | **bool**| Include community_data data (true/false) &lt;b&gt;[default: true]&lt;/b&gt; | [optional] 
 **developer_data** | **bool**| Include developer_data data (true/false) &lt;b&gt;[default: true]&lt;/b&gt; | [optional] 
 **sparkline** | **bool**| Include sparkline 7 days data (eg. true, false) &lt;b&gt;[default: false]&lt;/b&gt; | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coins_id_history_get**
> coins_id_history_get(id, _date, localization=localization)

Get historical data (price, market cap, 24hr volume, ..) at a given date for a coin.

Get historical data (price, market cap, 24hr volume, ..) at a given date for a coin. The data returned is at 00:00:00 UTC.  The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CoinsApi()
id = 'id_example' # str | pass the coin id (can be obtained from /coins) eg. bitcoin
_date = '_date_example' # str | The date of data snapshot in dd-mm-yyyy eg. 30-12-2022
localization = 'localization_example' # str | Set to false to exclude localized languages in response (optional)

try:
    # Get historical data (price, market cap, 24hr volume, ..) at a given date for a coin.
    api_instance.coins_id_history_get(id, _date, localization=localization)
except ApiException as e:
    print("Exception when calling CoinsApi->coins_id_history_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| pass the coin id (can be obtained from /coins) eg. bitcoin | 
 **_date** | **str**| The date of data snapshot in dd-mm-yyyy eg. 30-12-2022 | 
 **localization** | **str**| Set to false to exclude localized languages in response | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coins_id_market_chart_get**
> coins_id_market_chart_get(id, vs_currency, days, interval=interval, precision=precision)

Get historical market data include price, market cap, and 24h volume (granularity auto)

Get historical market data include price, market cap, and 24h volume (granularity auto)  Data granularity is automatic (cannot be adjusted) <b><ul><li>1 day from current time = 5 minute interval data</li><li>2 - 90 days from current time = hourly data</li><li>above 90 days from current time = daily data (00:00 UTC)</li></ul></b>  Cache based on days range:<ul><li>1 day = 30 seconds cache</li><li>2-90 days = 30 minutes cache</li><li> 90 days = 12 hours cache</li></ul><p>The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35). The cache will always expire at 00:40 UTC.</p>

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CoinsApi()
id = 'id_example' # str | pass the coin id (can be obtained from /coins) eg. bitcoin
vs_currency = 'vs_currency_example' # str | The target currency of market data (usd, eur, jpy, etc.)
days = 'days_example' # str | Data up to number of days ago (eg. 1,14,30,max)
interval = 'interval_example' # str | Data interval. Possible value: daily (optional)
precision = 'precision_example' # str | <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value (optional)

try:
    # Get historical market data include price, market cap, and 24h volume (granularity auto)
    api_instance.coins_id_market_chart_get(id, vs_currency, days, interval=interval, precision=precision)
except ApiException as e:
    print("Exception when calling CoinsApi->coins_id_market_chart_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| pass the coin id (can be obtained from /coins) eg. bitcoin | 
 **vs_currency** | **str**| The target currency of market data (usd, eur, jpy, etc.) | 
 **days** | **str**| Data up to number of days ago (eg. 1,14,30,max) | 
 **interval** | **str**| Data interval. Possible value: daily | [optional] 
 **precision** | **str**| &lt;b&gt;full&lt;/b&gt; or any value between 0 - 18 to specify decimal place for currency price value | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coins_id_market_chart_range_get**
> coins_id_market_chart_range_get(id, vs_currency, _from, to, precision=precision)

Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)

Get historical market data include price, market cap, and 24h volume (granularity auto)  Data granularity is automatic (cannot be adjusted) <b><ul><li>1 day from current time = 5 minute interval data</li><li>2 - 90 days of date range = hourly data</li><li>above 90 days of date range = daily data (00:00 UTC)</li></ul></b>  Cache / Update Frequency: every 5 minutes. The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CoinsApi()
id = 'id_example' # str | pass the coin id (can be obtained from /coins) eg. bitcoin
vs_currency = 'vs_currency_example' # str | The target currency of market data (usd, eur, jpy, etc.)
_from = '_from_example' # str | From date in UNIX Timestamp (eg. 1392577232)
to = 'to_example' # str | To date in UNIX Timestamp (eg. 1422577232)
precision = 'precision_example' # str | <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value (optional)

try:
    # Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
    api_instance.coins_id_market_chart_range_get(id, vs_currency, _from, to, precision=precision)
except ApiException as e:
    print("Exception when calling CoinsApi->coins_id_market_chart_range_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| pass the coin id (can be obtained from /coins) eg. bitcoin | 
 **vs_currency** | **str**| The target currency of market data (usd, eur, jpy, etc.) | 
 **_from** | **str**| From date in UNIX Timestamp (eg. 1392577232) | 
 **to** | **str**| To date in UNIX Timestamp (eg. 1422577232) | 
 **precision** | **str**| &lt;b&gt;full&lt;/b&gt; or any value between 0 - 18 to specify decimal place for currency price value | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coins_id_ohlc_get**
> list[float] coins_id_ohlc_get(id, vs_currency, days, precision=precision)

Get coin's OHLC

Candle's body - data granularity is automatic (cannot be adjusted for public api users): <ul><li>1 - 2 days: 30 minutes</li><li>3 - 30 days: 4 hours</li><li>31 days and beyond: 4 days</li></ul> <p>Daily candle interval parameter is available for paid plan users only (Analyst/Lite/Pro/Enterprise), use <b><i>interval=daily</i></b> parameter in your request:</p> <ul><li>'daily' interval: available for 1/7/14/30/90/180 days</li></ul>  Cache / Update Frequency: every 30 minutes The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CoinsApi()
id = 'id_example' # str | pass the coin id (can be obtained from /coins/list) eg. bitcoin
vs_currency = 'vs_currency_example' # str | The target currency of market data (usd, eur, jpy, etc.)
days = 'days_example' # str |  Data up to number of days ago (1/7/14/30/90/180/365/max)
precision = 'precision_example' # str | <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value (optional)

try:
    # Get coin's OHLC
    api_response = api_instance.coins_id_ohlc_get(id, vs_currency, days, precision=precision)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CoinsApi->coins_id_ohlc_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| pass the coin id (can be obtained from /coins/list) eg. bitcoin | 
 **vs_currency** | **str**| The target currency of market data (usd, eur, jpy, etc.) | 
 **days** | **str**|  Data up to number of days ago (1/7/14/30/90/180/365/max) | 
 **precision** | **str**| &lt;b&gt;full&lt;/b&gt; or any value between 0 - 18 to specify decimal place for currency price value | [optional] 

### Return type

**list[float]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coins_id_tickers_get**
> coins_id_tickers_get(id, exchange_ids=exchange_ids, include_exchange_logo=include_exchange_logo, page=page, order=order, depth=depth)

Get coin tickers (paginated to 100 items)

Get coin tickers (paginated to 100 items)<br><br> **IMPORTANT**:  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for more than 8 hours.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)  Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li><li><strong>timestamp</strong>: returns the last time that the price has changed</li><li><strong>last_traded_at</strong>: returns the last time that the price has changed</li><li><strong>last_fetch_at</strong>: returns the last time we call the API</li>  Cache / Update Frequency: every 2 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CoinsApi()
id = 'id_example' # str | pass the coin id (can be obtained from /coins/list) eg. bitcoin
exchange_ids = 'exchange_ids_example' # str | filter results by exchange_ids (ref: v3/exchanges/list) (optional)
include_exchange_logo = 'include_exchange_logo_example' # str | flag to show exchange_logo. valid values: true, false (optional)
page = 56 # int | Page through results (optional)
order = 'order_example' # str | valid values: <b>trust_score_desc (default), trust_score_asc and volume_desc</b> (optional)
depth = 'depth_example' # str | flag to show 2% orderbook depth. i.e., cost_to_move_up_usd and cost_to_move_down_usd. valid values: true, false (optional)

try:
    # Get coin tickers (paginated to 100 items)
    api_instance.coins_id_tickers_get(id, exchange_ids=exchange_ids, include_exchange_logo=include_exchange_logo, page=page, order=order, depth=depth)
except ApiException as e:
    print("Exception when calling CoinsApi->coins_id_tickers_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| pass the coin id (can be obtained from /coins/list) eg. bitcoin | 
 **exchange_ids** | **str**| filter results by exchange_ids (ref: v3/exchanges/list) | [optional] 
 **include_exchange_logo** | **str**| flag to show exchange_logo. valid values: true, false | [optional] 
 **page** | **int**| Page through results | [optional] 
 **order** | **str**| valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt; | [optional] 
 **depth** | **str**| flag to show 2% orderbook depth. i.e., cost_to_move_up_usd and cost_to_move_down_usd. valid values: true, false | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coins_list_get**
> coins_list_get(include_platform=include_platform)

List all supported coins id, name and symbol (no pagination required)

<li>All the coins that show up on this <strong>/coins/list</strong> endpoint are Active coins that listed by CoinGecko team on CoinGecko.com</li><li>If a coin is inactive or deactivated, it will be removed from <strong>/coins/list</strong></li>  Cache / Update Frequency: every 5 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CoinsApi()
include_platform = true # bool | flag to include platform contract addresses (eg. 0x.... for Ethereum based tokens).   valid values: true, false (optional)

try:
    # List all supported coins id, name and symbol (no pagination required)
    api_instance.coins_list_get(include_platform=include_platform)
except ApiException as e:
    print("Exception when calling CoinsApi->coins_list_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_platform** | **bool**| flag to include platform contract addresses (eg. 0x.... for Ethereum based tokens).   valid values: true, false | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coins_markets_get**
> coins_markets_get(vs_currency, ids=ids, category=category, order=order, per_page=per_page, page=page, sparkline=sparkline, price_change_percentage=price_change_percentage, locale=locale, precision=precision)

List all supported coins price, market cap, volume, and market related data

Use this to obtain all the coins market data (price, market cap, volume), per page.<br>Note: when both 'category' and 'ids' parameters are supplied, the 'category' parameter takes precedence over the 'ids' parameter.  Cache / Update Frequency: every 45 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CoinsApi()
vs_currency = 'vs_currency_example' # str | The target currency of market data (usd, eur, jpy, etc.)
ids = 'ids_example' # str | The ids of the coin, comma separated crytocurrency symbols (base). refers to `/coins/list`. (optional)
category = 'category_example' # str | filter by coin category. Refer to /coin/categories/list (optional)
order = 'market_cap_desc' # str | valid values: <b>market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc</b> sort results by field. (optional) (default to market_cap_desc)
per_page = 100 # int | valid values: 1..250  Total results per page (optional) (default to 100)
page = 1 # int | Page through results (optional) (default to 1)
sparkline = false # bool | Include sparkline 7 days data (eg. true, false) (optional) (default to false)
price_change_percentage = 'price_change_percentage_example' # str | Include price change percentage in <b>1h, 24h, 7d, 14d, 30d, 200d, 1y</b> (eg. '`1h,24h,7d`' comma-separated, invalid values will be discarded) (optional)
locale = 'en' # str | valid values: <b>ar, bg, cs, da, de, el, en, es, fi, fr, he, hi, hr, hu, id, it, ja, ko, lt, nl, no, pl, pt, ro, ru, sk, sl, sv, th, tr, uk, vi, zh, zh-tw</b> (optional) (default to en)
precision = 'precision_example' # str | <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value (optional)

try:
    # List all supported coins price, market cap, volume, and market related data
    api_instance.coins_markets_get(vs_currency, ids=ids, category=category, order=order, per_page=per_page, page=page, sparkline=sparkline, price_change_percentage=price_change_percentage, locale=locale, precision=precision)
except ApiException as e:
    print("Exception when calling CoinsApi->coins_markets_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vs_currency** | **str**| The target currency of market data (usd, eur, jpy, etc.) | 
 **ids** | **str**| The ids of the coin, comma separated crytocurrency symbols (base). refers to &#x60;/coins/list&#x60;. | [optional] 
 **category** | **str**| filter by coin category. Refer to /coin/categories/list | [optional] 
 **order** | **str**| valid values: &lt;b&gt;market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc&lt;/b&gt; sort results by field. | [optional] [default to market_cap_desc]
 **per_page** | **int**| valid values: 1..250  Total results per page | [optional] [default to 100]
 **page** | **int**| Page through results | [optional] [default to 1]
 **sparkline** | **bool**| Include sparkline 7 days data (eg. true, false) | [optional] [default to false]
 **price_change_percentage** | **str**| Include price change percentage in &lt;b&gt;1h, 24h, 7d, 14d, 30d, 200d, 1y&lt;/b&gt; (eg. &#39;&#x60;1h,24h,7d&#x60;&#39; comma-separated, invalid values will be discarded) | [optional] 
 **locale** | **str**| valid values: &lt;b&gt;ar, bg, cs, da, de, el, en, es, fi, fr, he, hi, hr, hu, id, it, ja, ko, lt, nl, no, pl, pt, ro, ru, sk, sl, sv, th, tr, uk, vi, zh, zh-tw&lt;/b&gt; | [optional] [default to en]
 **precision** | **str**| &lt;b&gt;full&lt;/b&gt; or any value between 0 - 18 to specify decimal place for currency price value | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

