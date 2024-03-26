# coingecko_openapi_client.SearchApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_get**](SearchApi.md#search_get) | **GET** /search | Search for coins, categories and markets on CoinGecko


# **search_get**
> search_get(query)

Search for coins, categories and markets on CoinGecko

Search for coins, categories and markets listed on CoinGecko ordered by largest Market Cap first.  Cache / Update Frequency: every 15 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.SearchApi()
query = 'query_example' # str | Search string

try:
    # Search for coins, categories and markets on CoinGecko
    api_instance.search_get(query)
except ApiException as e:
    print("Exception when calling SearchApi->search_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Search string | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

