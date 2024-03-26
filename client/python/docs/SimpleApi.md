# coingecko_openapi_client.SimpleApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**simple_price_get**](SimpleApi.md#simple_price_get) | **GET** /simple/price | Get the current price of any cryptocurrencies in any other supported currencies that you need.
[**simple_supported_vs_currencies_get**](SimpleApi.md#simple_supported_vs_currencies_get) | **GET** /simple/supported_vs_currencies | Get list of supported_vs_currencies.
[**simple_token_price_id_get**](SimpleApi.md#simple_token_price_id_get) | **GET** /simple/token_price/{id} | Get current price of tokens (using contract addresses) for a given platform in any other currency that you need.


# **simple_price_get**
> simple_price_get(ids, vs_currencies, include_market_cap=include_market_cap, include_24hr_vol=include_24hr_vol, include_24hr_change=include_24hr_change, include_last_updated_at=include_last_updated_at, precision=precision)

Get the current price of any cryptocurrencies in any other supported currencies that you need.

Note: to check if a price is stale, please flag `include_last_updated_at=true` to get the latest updated time. You may also flag `include_24hr_change=true` to check if it returns 'null' value.  Cache / Update Frequency: every 60 seconds  (every 30 seconds for Pro API)

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.SimpleApi()
ids = 'ids_example' # str | id of coins, comma-separated if querying more than 1 coin *refers to <b>`coins/list`</b>
vs_currencies = 'vs_currencies_example' # str | vs_currency of coins, comma-separated if querying more than 1 vs_currency *refers to <b>`simple/supported_vs_currencies`</b>
include_market_cap = 'include_market_cap_example' # str | <b>true/false</b> to include market_cap, <b>default: false</b> (optional)
include_24hr_vol = 'include_24hr_vol_example' # str | <b>true/false</b> to include 24hr_vol, <b>default: false</b> (optional)
include_24hr_change = 'include_24hr_change_example' # str | <b>true/false</b> to include 24hr_change, <b>default: false</b> (optional)
include_last_updated_at = 'include_last_updated_at_example' # str | <b>true/false</b> to include last_updated_at of price, <b>default: false</b> (optional)
precision = 'precision_example' # str | <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value (optional)

try:
    # Get the current price of any cryptocurrencies in any other supported currencies that you need.
    api_instance.simple_price_get(ids, vs_currencies, include_market_cap=include_market_cap, include_24hr_vol=include_24hr_vol, include_24hr_change=include_24hr_change, include_last_updated_at=include_last_updated_at, precision=precision)
except ApiException as e:
    print("Exception when calling SimpleApi->simple_price_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **str**| id of coins, comma-separated if querying more than 1 coin *refers to &lt;b&gt;&#x60;coins/list&#x60;&lt;/b&gt; | 
 **vs_currencies** | **str**| vs_currency of coins, comma-separated if querying more than 1 vs_currency *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt; | 
 **include_market_cap** | **str**| &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt; | [optional] 
 **include_24hr_vol** | **str**| &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt; | [optional] 
 **include_24hr_change** | **str**| &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt; | [optional] 
 **include_last_updated_at** | **str**| &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt; | [optional] 
 **precision** | **str**| &lt;b&gt;full&lt;/b&gt; or any value between 0 - 18 to specify decimal place for currency price value | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **simple_supported_vs_currencies_get**
> simple_supported_vs_currencies_get()

Get list of supported_vs_currencies.

Cache / Update Frequency: every 60 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.SimpleApi()

try:
    # Get list of supported_vs_currencies.
    api_instance.simple_supported_vs_currencies_get()
except ApiException as e:
    print("Exception when calling SimpleApi->simple_supported_vs_currencies_get: %s\n" % e)
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

# **simple_token_price_id_get**
> simple_token_price_id_get(id, contract_addresses, vs_currencies, include_market_cap=include_market_cap, include_24hr_vol=include_24hr_vol, include_24hr_change=include_24hr_change, include_last_updated_at=include_last_updated_at, precision=precision)

Get current price of tokens (using contract addresses) for a given platform in any other currency that you need.

This endpoint allows you to query a token price by using contract address. It returns the global average price that is aggregated across all active exchanges on CoinGecko. It does not return the price of a specific network, you may cross-check the price on CoinGecko.com. Learn more about our price methodology <a href='https://www.coingecko.com/en/methodology'>here</a>.  Cache / Update Frequency: every 60 seconds  (every 30 seconds for Pro API)

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.SimpleApi()
id = 'id_example' # str | The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
contract_addresses = 'contract_addresses_example' # str | The contract address of tokens, comma separated
vs_currencies = 'vs_currencies_example' # str | vs_currency of coins, comma-separated if querying more than 1 vs_currency *refers to <b>`simple/supported_vs_currencies`</b>
include_market_cap = 'include_market_cap_example' # str | <b>true/false</b> to include market_cap, <b>default: false</b> (optional)
include_24hr_vol = 'include_24hr_vol_example' # str | <b>true/false</b> to include 24hr_vol, <b>default: false</b> (optional)
include_24hr_change = 'include_24hr_change_example' # str | <b>true/false</b> to include 24hr_change, <b>default: false</b> (optional)
include_last_updated_at = 'include_last_updated_at_example' # str | <b>true/false</b> to include last_updated_at of price, <b>default: false</b> (optional)
precision = 'precision_example' # str | <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value (optional)

try:
    # Get current price of tokens (using contract addresses) for a given platform in any other currency that you need.
    api_instance.simple_token_price_id_get(id, contract_addresses, vs_currencies, include_market_cap=include_market_cap, include_24hr_vol=include_24hr_vol, include_24hr_change=include_24hr_change, include_last_updated_at=include_last_updated_at, precision=precision)
except ApiException as e:
    print("Exception when calling SimpleApi->simple_token_price_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the platform issuing tokens (See asset_platforms endpoint for list of options) | 
 **contract_addresses** | **str**| The contract address of tokens, comma separated | 
 **vs_currencies** | **str**| vs_currency of coins, comma-separated if querying more than 1 vs_currency *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt; | 
 **include_market_cap** | **str**| &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt; | [optional] 
 **include_24hr_vol** | **str**| &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt; | [optional] 
 **include_24hr_change** | **str**| &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt; | [optional] 
 **include_last_updated_at** | **str**| &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt; | [optional] 
 **precision** | **str**| &lt;b&gt;full&lt;/b&gt; or any value between 0 - 18 to specify decimal place for currency price value | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

