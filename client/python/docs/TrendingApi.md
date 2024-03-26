# coingecko_openapi_client.TrendingApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_trending_get**](TrendingApi.md#search_trending_get) | **GET** /search/trending | Get trending search coins (Top-7) on CoinGecko in the last 24 hours


# **search_trending_get**
> search_trending_get()

Get trending search coins (Top-7) on CoinGecko in the last 24 hours

* Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first). * Top-5 trending NFTs on CoinGecko based on the highest trading volume in the last 24 hours  Cache / Update Frequency: every 10 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.TrendingApi()

try:
    # Get trending search coins (Top-7) on CoinGecko in the last 24 hours
    api_instance.search_trending_get()
except ApiException as e:
    print("Exception when calling TrendingApi->search_trending_get: %s\n" % e)
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

