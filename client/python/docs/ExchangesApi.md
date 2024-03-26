# coingecko_openapi_client.ExchangesApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exchanges_get**](ExchangesApi.md#exchanges_get) | **GET** /exchanges | List all exchanges (Active with trading volumes)
[**exchanges_id_get**](ExchangesApi.md#exchanges_id_get) | **GET** /exchanges/{id} | Get exchange volume in BTC and top 100 tickers only
[**exchanges_id_tickers_get**](ExchangesApi.md#exchanges_id_tickers_get) | **GET** /exchanges/{id}/tickers | Get exchange tickers (paginated, 100 tickers per page)
[**exchanges_id_volume_chart_get**](ExchangesApi.md#exchanges_id_volume_chart_get) | **GET** /exchanges/{id}/volume_chart | Get 24 hour rolling trading volume data (in BTC) for a given exchange.
[**exchanges_list_get**](ExchangesApi.md#exchanges_list_get) | **GET** /exchanges/list | List all supported markets id and name (no pagination required)


# **exchanges_get**
> exchanges_get(per_page=per_page, page=page)

List all exchanges (Active with trading volumes)

List all exchanges  Cache / Update Frequency: every 60 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.ExchangesApi()
per_page = 56 # int | Valid values: 1...250 Total results per page Default value:: 100 (optional)
page = 'page_example' # str | page through results (optional)

try:
    # List all exchanges (Active with trading volumes)
    api_instance.exchanges_get(per_page=per_page, page=page)
except ApiException as e:
    print("Exception when calling ExchangesApi->exchanges_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Valid values: 1...250 Total results per page Default value:: 100 | [optional] 
 **page** | **str**| page through results | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchanges_id_get**
> exchanges_id_get(id)

Get exchange volume in BTC and top 100 tickers only

Get exchange volume in BTC and tickers.<br>For derivatives (e.g. bitmex, binance_futures), please use `/derivatives/exchange/{id}` endpoint.<br><br> **IMPORTANT**:  Ticker object is limited to 100 items, to get more tickers, use `/exchanges/{id}/tickers`  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for more than 8 hours.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)  Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li><li><strong>timestamp</strong>: returns the last time that the price has changed</li><li><strong>last_traded_at</strong>: returns the last time that the price has changed</li><li><strong>last_fetch_at</strong>: returns the last time we call the API</li>  Cache / Update Frequency: every 60 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.ExchangesApi()
id = 'id_example' # str | pass the exchange id (can be obtained from /exchanges/list) eg. binance

try:
    # Get exchange volume in BTC and top 100 tickers only
    api_instance.exchanges_id_get(id)
except ApiException as e:
    print("Exception when calling ExchangesApi->exchanges_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| pass the exchange id (can be obtained from /exchanges/list) eg. binance | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchanges_id_tickers_get**
> exchanges_id_tickers_get(id, coin_ids=coin_ids, include_exchange_logo=include_exchange_logo, page=page, depth=depth, order=order)

Get exchange tickers (paginated, 100 tickers per page)

Get exchange tickers (paginated)<br><br> **IMPORTANT**:  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for more than 8 hours.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)  Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li><li><strong>timestamp</strong>: returns the last time that the price has changed</li><li><strong>last_traded_at</strong>: returns the last time that the price has changed</li><li><strong>last_fetch_at</strong>: returns the last time we call the API</li>  Cache / Update Frequency: every 60 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.ExchangesApi()
id = 'id_example' # str | pass the exchange id (can be obtained from /exchanges/list) eg. binance
coin_ids = 'coin_ids_example' # str | filter tickers by coin_ids (ref: v3/coins/list) (optional)
include_exchange_logo = 'include_exchange_logo_example' # str | flag to show exchange_logo. valid values: true, false (optional)
page = 56 # int | Page through results (optional)
depth = 'depth_example' # str | flag to show 2% orderbook depth. i.e., cost_to_move_up_usd and cost_to_move_down_usd. valid values: true, false (optional)
order = 'order_example' # str | valid values: <b>trust_score_desc (default), trust_score_asc and volume_desc</b> (optional)

try:
    # Get exchange tickers (paginated, 100 tickers per page)
    api_instance.exchanges_id_tickers_get(id, coin_ids=coin_ids, include_exchange_logo=include_exchange_logo, page=page, depth=depth, order=order)
except ApiException as e:
    print("Exception when calling ExchangesApi->exchanges_id_tickers_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| pass the exchange id (can be obtained from /exchanges/list) eg. binance | 
 **coin_ids** | **str**| filter tickers by coin_ids (ref: v3/coins/list) | [optional] 
 **include_exchange_logo** | **str**| flag to show exchange_logo. valid values: true, false | [optional] 
 **page** | **int**| Page through results | [optional] 
 **depth** | **str**| flag to show 2% orderbook depth. i.e., cost_to_move_up_usd and cost_to_move_down_usd. valid values: true, false | [optional] 
 **order** | **str**| valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt; | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchanges_id_volume_chart_get**
> exchanges_id_volume_chart_get(id, days)

Get 24 hour rolling trading volume data (in BTC) for a given exchange.

Get 24 hour rolling trading volume data (in BTC) for a given exchange.  <b>Data granularity is automatic (cannot be adjusted)</b><ul><li>1 day = 10-minutely</li><li>2-90 days = hourly</li><li>91 days above = daily</li></ul> <p>Note: exclusive endpoint is available for paid users to query more than 1 year of historical data</p>   Cache / Update Frequency: every 60 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.ExchangesApi()
id = 'id_example' # str | pass the exchange id (can be obtained from /exchanges/list) eg. binance
days = 56 # int |  Data up to number of days ago (1/7/14/30/90/180/365)

try:
    # Get 24 hour rolling trading volume data (in BTC) for a given exchange.
    api_instance.exchanges_id_volume_chart_get(id, days)
except ApiException as e:
    print("Exception when calling ExchangesApi->exchanges_id_volume_chart_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| pass the exchange id (can be obtained from /exchanges/list) eg. binance | 
 **days** | **int**|  Data up to number of days ago (1/7/14/30/90/180/365) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchanges_list_get**
> exchanges_list_get()

List all supported markets id and name (no pagination required)

Use this to obtain all the markets' id in order to make API calls  Cache / Update Frequency: every 5 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.ExchangesApi()

try:
    # List all supported markets id and name (no pagination required)
    api_instance.exchanges_list_get()
except ApiException as e:
    print("Exception when calling ExchangesApi->exchanges_list_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

