# coding: utf-8

"""
    CoinGecko API V3

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 3.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from coingecko_openapi_client.api_client import ApiClient


class DerivativesApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def derivatives_exchanges_get(self, **kwargs):  # noqa: E501
        """List all derivative exchanges  # noqa: E501

        List all derivative exchanges.  Cache / Update Frequency: every 60 seconds  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.derivatives_exchanges_get(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str order: order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc
        :param int per_page: Total results per page
        :param int page: Page through results
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.derivatives_exchanges_get_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.derivatives_exchanges_get_with_http_info(**kwargs)  # noqa: E501
            return data

    def derivatives_exchanges_get_with_http_info(self, **kwargs):  # noqa: E501
        """List all derivative exchanges  # noqa: E501

        List all derivative exchanges.  Cache / Update Frequency: every 60 seconds  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.derivatives_exchanges_get_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str order: order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc
        :param int per_page: Total results per page
        :param int page: Page through results
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['order', 'per_page', 'page']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method derivatives_exchanges_get" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'order' in params:
            query_params.append(('order', params['order']))  # noqa: E501
        if 'per_page' in params:
            query_params.append(('per_page', params['per_page']))  # noqa: E501
        if 'page' in params:
            query_params.append(('page', params['page']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/derivatives/exchanges', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=object,  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def derivatives_exchanges_id_get(self, id, **kwargs):  # noqa: E501
        """show derivative exchange data  # noqa: E501

        show derivative exchange data  Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li>  Cache / Update Frequency: every 30 seconds  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.derivatives_exchanges_id_get(id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str id: pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex (required)
        :param str include_tickers: ['all', 'unexpired'] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.derivatives_exchanges_id_get_with_http_info(id, **kwargs)  # noqa: E501
        else:
            (data) = self.derivatives_exchanges_id_get_with_http_info(id, **kwargs)  # noqa: E501
            return data

    def derivatives_exchanges_id_get_with_http_info(self, id, **kwargs):  # noqa: E501
        """show derivative exchange data  # noqa: E501

        show derivative exchange data  Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li>  Cache / Update Frequency: every 30 seconds  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.derivatives_exchanges_id_get_with_http_info(id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str id: pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex (required)
        :param str include_tickers: ['all', 'unexpired'] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['id', 'include_tickers']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method derivatives_exchanges_id_get" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'id' is set
        if self.api_client.client_side_validation and ('id' not in params or
                                                       params['id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `id` when calling `derivatives_exchanges_id_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'id' in params:
            path_params['id'] = params['id']  # noqa: E501

        query_params = []
        if 'include_tickers' in params:
            query_params.append(('include_tickers', params['include_tickers']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/derivatives/exchanges/{id}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=object,  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def derivatives_exchanges_list_get(self, **kwargs):  # noqa: E501
        """List all derivative exchanges name and identifier  # noqa: E501

        List all derivative exchanges name and identifier.  Cache / Update Frequency: every 5 minutes  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.derivatives_exchanges_list_get(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.derivatives_exchanges_list_get_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.derivatives_exchanges_list_get_with_http_info(**kwargs)  # noqa: E501
            return data

    def derivatives_exchanges_list_get_with_http_info(self, **kwargs):  # noqa: E501
        """List all derivative exchanges name and identifier  # noqa: E501

        List all derivative exchanges name and identifier.  Cache / Update Frequency: every 5 minutes  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.derivatives_exchanges_list_get_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = []  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method derivatives_exchanges_list_get" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/derivatives/exchanges/list', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=object,  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def derivatives_get(self, **kwargs):  # noqa: E501
        """List all derivative tickers  # noqa: E501

        List all derivative tickers.<br>Note: 'open_interest' and 'volume_24h' data are in USD  Cache / Update Frequency: every 30 seconds  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.derivatives_get(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.derivatives_get_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.derivatives_get_with_http_info(**kwargs)  # noqa: E501
            return data

    def derivatives_get_with_http_info(self, **kwargs):  # noqa: E501
        """List all derivative tickers  # noqa: E501

        List all derivative tickers.<br>Note: 'open_interest' and 'volume_24h' data are in USD  Cache / Update Frequency: every 30 seconds  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.derivatives_get_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = []  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method derivatives_get" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/derivatives', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=object,  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
