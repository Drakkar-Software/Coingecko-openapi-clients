# coingecko_openapi_client.CompaniesBetaApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companies_public_treasury_coin_id_get**](CompaniesBetaApi.md#companies_public_treasury_coin_id_get) | **GET** /companies/public_treasury/{coin_id} | Get public companies data


# **companies_public_treasury_coin_id_get**
> companies_public_treasury_coin_id_get(coin_id)

Get public companies data

Get public companies bitcoin or ethereum holdings (Ordered by total holdings descending)

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.CompaniesBetaApi()
coin_id = 'coin_id_example' # str | bitcoin or ethereum

try:
    # Get public companies data
    api_instance.companies_public_treasury_coin_id_get(coin_id)
except ApiException as e:
    print("Exception when calling CompaniesBetaApi->companies_public_treasury_coin_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coin_id** | **str**| bitcoin or ethereum | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

