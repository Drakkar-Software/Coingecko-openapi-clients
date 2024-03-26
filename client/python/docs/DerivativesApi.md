# coingecko_openapi_client.DerivativesApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**derivatives_exchanges_get**](DerivativesApi.md#derivatives_exchanges_get) | **GET** /derivatives/exchanges | List all derivative exchanges
[**derivatives_exchanges_id_get**](DerivativesApi.md#derivatives_exchanges_id_get) | **GET** /derivatives/exchanges/{id} | show derivative exchange data
[**derivatives_exchanges_list_get**](DerivativesApi.md#derivatives_exchanges_list_get) | **GET** /derivatives/exchanges/list | List all derivative exchanges name and identifier
[**derivatives_get**](DerivativesApi.md#derivatives_get) | **GET** /derivatives | List all derivative tickers


# **derivatives_exchanges_get**
> derivatives_exchanges_get(order=order, per_page=per_page, page=page)

List all derivative exchanges

List all derivative exchanges.  Cache / Update Frequency: every 60 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.DerivativesApi()
order = 'order_example' # str | order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc (optional)
per_page = 56 # int | Total results per page (optional)
page = 56 # int | Page through results (optional)

try:
    # List all derivative exchanges
    api_instance.derivatives_exchanges_get(order=order, per_page=per_page, page=page)
except ApiException as e:
    print("Exception when calling DerivativesApi->derivatives_exchanges_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **str**| order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc | [optional] 
 **per_page** | **int**| Total results per page | [optional] 
 **page** | **int**| Page through results | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **derivatives_exchanges_id_get**
> derivatives_exchanges_id_get(id, include_tickers=include_tickers)

show derivative exchange data

show derivative exchange data  Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li>  Cache / Update Frequency: every 30 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.DerivativesApi()
id = 'id_example' # str | pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex
include_tickers = 'include_tickers_example' # str | ['all', 'unexpired'] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response (optional)

try:
    # show derivative exchange data
    api_instance.derivatives_exchanges_id_get(id, include_tickers=include_tickers)
except ApiException as e:
    print("Exception when calling DerivativesApi->derivatives_exchanges_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex | 
 **include_tickers** | **str**| [&#39;all&#39;, &#39;unexpired&#39;] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **derivatives_exchanges_list_get**
> derivatives_exchanges_list_get()

List all derivative exchanges name and identifier

List all derivative exchanges name and identifier.  Cache / Update Frequency: every 5 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.DerivativesApi()

try:
    # List all derivative exchanges name and identifier
    api_instance.derivatives_exchanges_list_get()
except ApiException as e:
    print("Exception when calling DerivativesApi->derivatives_exchanges_list_get: %s\n" % e)
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

# **derivatives_get**
> derivatives_get()

List all derivative tickers

List all derivative tickers.<br>Note: 'open_interest' and 'volume_24h' data are in USD  Cache / Update Frequency: every 30 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.DerivativesApi()

try:
    # List all derivative tickers
    api_instance.derivatives_get()
except ApiException as e:
    print("Exception when calling DerivativesApi->derivatives_get: %s\n" % e)
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

