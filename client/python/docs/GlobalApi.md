# coingecko_openapi_client.GlobalApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_decentralized_finance_defi_get**](GlobalApi.md#global_decentralized_finance_defi_get) | **GET** /global/decentralized_finance_defi | Get cryptocurrency global decentralized finance(defi) data
[**global_get**](GlobalApi.md#global_get) | **GET** /global | Get cryptocurrency global data


# **global_decentralized_finance_defi_get**
> global_decentralized_finance_defi_get()

Get cryptocurrency global decentralized finance(defi) data

Get Top 100 Cryptocurrency Global Eecentralized Finance(defi) data  Cache / Update Frequency: every 60 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.GlobalApi()

try:
    # Get cryptocurrency global decentralized finance(defi) data
    api_instance.global_decentralized_finance_defi_get()
except ApiException as e:
    print("Exception when calling GlobalApi->global_decentralized_finance_defi_get: %s\n" % e)
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

# **global_get**
> global_get()

Get cryptocurrency global data

Get cryptocurrency global data  Cache / Update Frequency: every 10 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.GlobalApi()

try:
    # Get cryptocurrency global data
    api_instance.global_get()
except ApiException as e:
    print("Exception when calling GlobalApi->global_get: %s\n" % e)
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

