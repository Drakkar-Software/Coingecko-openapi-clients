# coingecko_openapi_client.NftsBetaApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nfts_asset_platform_id_contract_contract_address_get**](NftsBetaApi.md#nfts_asset_platform_id_contract_contract_address_get) | **GET** /nfts/{asset_platform_id}/contract/{contract_address} | Get current data (name, price_floor, volume_24h ...) for an NFT collection.
[**nfts_id_get**](NftsBetaApi.md#nfts_id_get) | **GET** /nfts/{id} | Get current data (name, price_floor, volume_24h ...) for an NFT collection
[**nfts_list_get**](NftsBetaApi.md#nfts_list_get) | **GET** /nfts/list | List all supported NFT ids, paginated by 100 items per page, paginated to 100 items


# **nfts_asset_platform_id_contract_contract_address_get**
> nfts_asset_platform_id_contract_contract_address_get(asset_platform_id, contract_address)

Get current data (name, price_floor, volume_24h ...) for an NFT collection.

Get current data (name, price_floor, volume_24h ...) for an NFT collection. *Solana NFT & Art Blocks are not supported for this endpoint, please use <b>`/nfts/{id}`</b> endpoint instead.  Cache / Update Frequency: every 60 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.NftsBetaApi()
asset_platform_id = 'asset_platform_id_example' # str | The id of the platform issuing tokens (See asset_platforms endpoint for list of options, use filter=nft param)
contract_address = 'contract_address_example' # str | The contract_address of the nft collection (/nfts/list for list of nft collection with metadata)

try:
    # Get current data (name, price_floor, volume_24h ...) for an NFT collection.
    api_instance.nfts_asset_platform_id_contract_contract_address_get(asset_platform_id, contract_address)
except ApiException as e:
    print("Exception when calling NftsBetaApi->nfts_asset_platform_id_contract_contract_address_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_platform_id** | **str**| The id of the platform issuing tokens (See asset_platforms endpoint for list of options, use filter&#x3D;nft param) | 
 **contract_address** | **str**| The contract_address of the nft collection (/nfts/list for list of nft collection with metadata) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **nfts_id_get**
> nfts_id_get(id)

Get current data (name, price_floor, volume_24h ...) for an NFT collection

Get current data (name, price_floor, volume_24h ...) for an NFT collection. native_currency (string) is only a representative of the currency.  Cache / Update Frequency: every 60 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.NftsBetaApi()
id = 'id_example' # str | id of nft collection (can be obtained from /nfts/list)

try:
    # Get current data (name, price_floor, volume_24h ...) for an NFT collection
    api_instance.nfts_id_get(id)
except ApiException as e:
    print("Exception when calling NftsBetaApi->nfts_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id of nft collection (can be obtained from /nfts/list) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **nfts_list_get**
> nfts_list_get(order=order, asset_platform_id=asset_platform_id, per_page=per_page, page=page)

List all supported NFT ids, paginated by 100 items per page, paginated to 100 items

Use this to obtain all the NFT ids in order to make API calls, paginated to 100 items.  Cache / Update Frequency: every 5 minutes

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.NftsBetaApi()
order = 'order_example' # str | valid values: <b>h24_volume_native_asc, h24_volume_native_desc, floor_price_native_asc, floor_price_native_desc, market_cap_native_asc, market_cap_native_desc, market_cap_usd_asc, market_cap_usd_desc</b> (optional)
asset_platform_id = 'asset_platform_id_example' # str | The id of the platform issuing tokens (See asset_platforms endpoint for list of options) (optional)
per_page = 100 # int | Valid values: 1..250<br>Total results per page (optional)
page = 1 # int | Page through results (optional)

try:
    # List all supported NFT ids, paginated by 100 items per page, paginated to 100 items
    api_instance.nfts_list_get(order=order, asset_platform_id=asset_platform_id, per_page=per_page, page=page)
except ApiException as e:
    print("Exception when calling NftsBetaApi->nfts_list_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **str**| valid values: &lt;b&gt;h24_volume_native_asc, h24_volume_native_desc, floor_price_native_asc, floor_price_native_desc, market_cap_native_asc, market_cap_native_desc, market_cap_usd_asc, market_cap_usd_desc&lt;/b&gt; | [optional] 
 **asset_platform_id** | **str**| The id of the platform issuing tokens (See asset_platforms endpoint for list of options) | [optional] 
 **per_page** | **int**| Valid values: 1..250&lt;br&gt;Total results per page | [optional] 
 **page** | **int**| Page through results | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

