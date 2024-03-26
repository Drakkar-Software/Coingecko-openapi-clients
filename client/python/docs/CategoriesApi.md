# coingecko_openapi_client.CategoriesApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coins_categories_get**](CategoriesApi.md#coins_categories_get) | **GET** /coins/categories | List all categories with market data
[**coins_categories_list_get**](CategoriesApi.md#coins_categories_list_get) | **GET** /coins/categories/list | List all categories


# **coins_categories_get**
> coins_categories_get(order=order)

List all categories with market data

List all categories with market data  Cache / Update Frequency: every 5 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CategoriesApi()
order = 'order_example' # str | valid values: <b>market_cap_desc (default), market_cap_asc, name_desc, name_asc, market_cap_change_24h_desc and market_cap_change_24h_asc</b> (optional)

try:
    # List all categories with market data
    api_instance.coins_categories_get(order=order)
except ApiException as e:
    print("Exception when calling CategoriesApi->coins_categories_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **str**| valid values: &lt;b&gt;market_cap_desc (default), market_cap_asc, name_desc, name_asc, market_cap_change_24h_desc and market_cap_change_24h_asc&lt;/b&gt; | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coins_categories_list_get**
> coins_categories_list_get()

List all categories

List all categories  Cache / Update Frequency: every 5 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CategoriesApi()

try:
    # List all categories
    api_instance.coins_categories_list_get()
except ApiException as e:
    print("Exception when calling CategoriesApi->coins_categories_list_get: %s\n" % e)
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

