# coingecko_openapi_client.ContractApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coins_id_contract_contract_address_get**](ContractApi.md#coins_id_contract_contract_address_get) | **GET** /coins/{id}/contract/{contract_address} | Get coin info from contract address
[**coins_id_contract_contract_address_market_chart_get**](ContractApi.md#coins_id_contract_contract_address_market_chart_get) | **GET** /coins/{id}/contract/{contract_address}/market_chart/ | Get historical market data include price, market cap, and 24h volume (granularity auto) from a contract address 
[**coins_id_contract_contract_address_market_chart_range_get**](ContractApi.md#coins_id_contract_contract_address_market_chart_range_get) | **GET** /coins/{id}/contract/{contract_address}/market_chart/range | Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto) from a contract address


# **coins_id_contract_contract_address_get**
> coins_id_contract_contract_address_get(id, contract_address)

Get coin info from contract address

Get coin info from contract address  Cache / Update Frequency: every 60 seconds

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.ContractApi()
id = 'id_example' # str | Asset platform (See asset_platforms endpoint for list of options)
contract_address = 'contract_address_example' # str | Token's contract address

try:
    # Get coin info from contract address
    api_instance.coins_id_contract_contract_address_get(id, contract_address)
except ApiException as e:
    print("Exception when calling ContractApi->coins_id_contract_contract_address_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Asset platform (See asset_platforms endpoint for list of options) | 
 **contract_address** | **str**| Token&#39;s contract address | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coins_id_contract_contract_address_market_chart_get**
> coins_id_contract_contract_address_market_chart_get(id, contract_address, vs_currency, days, precision=precision)

Get historical market data include price, market cap, and 24h volume (granularity auto) from a contract address 

Get historical market data include price, market cap, and 24h volume (granularity auto)  Data granularity is automatic (cannot be adjusted) <b><ul><li>1 day from current time = 5 minute interval data</li><li>2 - 90 days from current time = hourly data</li><li>above 90 days from current time = daily data (00:00 UTC)</li></ul></b>  Cache based on days range:<ul><li>1 day = 30 seconds cache</li><li>2-90 days = 30 minutes cache</li><li> 90 days = 12 hours cache</li></ul><p>The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35). The cache will always expire at 00:40 UTC.</p>

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.ContractApi()
id = 'id_example' # str | The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
contract_address = 'contract_address_example' # str | Token's contract address
vs_currency = 'vs_currency_example' # str | The target currency of market data (usd, eur, jpy, etc.)
days = 'days_example' # str | Data up to number of days ago (eg. 1,14,30,max)
precision = 'precision_example' # str | <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value (optional)

try:
    # Get historical market data include price, market cap, and 24h volume (granularity auto) from a contract address 
    api_instance.coins_id_contract_contract_address_market_chart_get(id, contract_address, vs_currency, days, precision=precision)
except ApiException as e:
    print("Exception when calling ContractApi->coins_id_contract_contract_address_market_chart_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the platform issuing tokens (See asset_platforms endpoint for list of options) | 
 **contract_address** | **str**| Token&#39;s contract address | 
 **vs_currency** | **str**| The target currency of market data (usd, eur, jpy, etc.) | 
 **days** | **str**| Data up to number of days ago (eg. 1,14,30,max) | 
 **precision** | **str**| &lt;b&gt;full&lt;/b&gt; or any value between 0 - 18 to specify decimal place for currency price value | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coins_id_contract_contract_address_market_chart_range_get**
> coins_id_contract_contract_address_market_chart_range_get(id, contract_address, vs_currency, _from, to, precision=precision)

Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto) from a contract address

Get historical market data include price, market cap, and 24h volume (granularity auto)  Data granularity is automatic (cannot be adjusted) <b><ul><li>1 day from current time = 5 minute interval data</li><li>2 - 90 days of date range = hourly data</li><li>above 90 days of date range = daily data (00:00 UTC)</li></ul></b>  Cache / Update Frequency: every 5 minutes. The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).

### Example
```python
from __future__ import print_function
import time
import coingecko_openapi_client
from coingecko_openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = coingecko_openapi_client.ContractApi()
id = 'id_example' # str | The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
contract_address = 'contract_address_example' # str | Token's contract address
vs_currency = 'vs_currency_example' # str | The target currency of market data (usd, eur, jpy, etc.)
_from = '_from_example' # str | From date in UNIX Timestamp (eg. 1392577232)
to = 'to_example' # str | To date in UNIX Timestamp (eg. 1422577232)
precision = 'precision_example' # str | <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value (optional)

try:
    # Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto) from a contract address
    api_instance.coins_id_contract_contract_address_market_chart_range_get(id, contract_address, vs_currency, _from, to, precision=precision)
except ApiException as e:
    print("Exception when calling ContractApi->coins_id_contract_contract_address_market_chart_range_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the platform issuing tokens (See asset_platforms endpoint for list of options) | 
 **contract_address** | **str**| Token&#39;s contract address | 
 **vs_currency** | **str**| The target currency of market data (usd, eur, jpy, etc.) | 
 **_from** | **str**| From date in UNIX Timestamp (eg. 1392577232) | 
 **to** | **str**| To date in UNIX Timestamp (eg. 1422577232) | 
 **precision** | **str**| &lt;b&gt;full&lt;/b&gt; or any value between 0 - 18 to specify decimal place for currency price value | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

