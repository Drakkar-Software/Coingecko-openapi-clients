# coingecko_openapi_client.ExchangeRatesApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exchange_rates_get**](ExchangeRatesApi.md#exchange_rates_get) | **GET** /exchange_rates | Get BTC-to-Currency exchange rates


# **exchange_rates_get**
> exchange_rates_get()

Get BTC-to-Currency exchange rates

Get BTC-to-Currency exchange rates  Cache / Update Frequency: every 60 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.ExchangeRatesApi()

try:
    # Get BTC-to-Currency exchange rates
    api_instance.exchange_rates_get()
except ApiException as e:
    print("Exception when calling ExchangeRatesApi->exchange_rates_get: %s\n" % e)
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

