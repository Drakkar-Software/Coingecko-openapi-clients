# coingecko_openapi_client.AssetPlatformsApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asset_platforms_get**](AssetPlatformsApi.md#asset_platforms_get) | **GET** /asset_platforms | List all asset platforms (Blockchain networks)


# **asset_platforms_get**
> asset_platforms_get(filter=filter)

List all asset platforms (Blockchain networks)

List all asset platforms

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.AssetPlatformsApi()
filter = 'filter_example' # str | apply relevant filters to results  valid values: \"nft\" (asset_platform nft-support) (optional)

try:
    # List all asset platforms (Blockchain networks)
    api_instance.asset_platforms_get(filter=filter)
except ApiException as e:
    print("Exception when calling AssetPlatformsApi->asset_platforms_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| apply relevant filters to results  valid values: \&quot;nft\&quot; (asset_platform nft-support) | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

