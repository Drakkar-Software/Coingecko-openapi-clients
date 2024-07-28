/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SimpleService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the current price of any cryptocurrencies in any other supported currencies that you need.
     * Note: to check if a price is stale, please flag `include_last_updated_at=true` to get the latest updated time. You may also flag `include_24hr_change=true` to check if it returns 'null' value.
     *
     * Cache / Update Frequency: every 60 seconds  (every 30 seconds for Pro API)
     * @param ids id of coins, comma-separated if querying more than 1 coin
     * *refers to <b>`coins/list`</b>
     * @param vsCurrencies vs_currency of coins, comma-separated if querying more than 1 vs_currency
     * *refers to <b>`simple/supported_vs_currencies`</b>
     * @param includeMarketCap <b>true/false</b> to include market_cap, <b>default: false</b>
     * @param include24HrVol <b>true/false</b> to include 24hr_vol, <b>default: false</b>
     * @param include24HrChange <b>true/false</b> to include 24hr_change, <b>default: false</b>
     * @param includeLastUpdatedAt <b>true/false</b> to include last_updated_at of price, <b>default: false</b>
     * @param precision <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value
     * @returns any price(s) of cryptocurrency
     * @throws ApiError
     */
    public getSimplePrice(
        ids: string,
        vsCurrencies: string,
        includeMarketCap?: string,
        include24HrVol?: string,
        include24HrChange?: string,
        includeLastUpdatedAt?: string,
        precision?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/simple/price',
            query: {
                'ids': ids,
                'vs_currencies': vsCurrencies,
                'include_market_cap': includeMarketCap,
                'include_24hr_vol': include24HrVol,
                'include_24hr_change': include24HrChange,
                'include_last_updated_at': includeLastUpdatedAt,
                'precision': precision,
            },
        });
    }
    /**
     * Get current price of tokens (using contract addresses) for a given platform in any other currency that you need.
     * This endpoint allows you to query a token price by using contract address. It returns the global average price that is aggregated across all active exchanges on CoinGecko. It does not return the price of a specific network, you may cross-check the price on CoinGecko.com.
     * Learn more about our price methodology <a href='https://www.coingecko.com/en/methodology'>here</a>.
     *
     * Cache / Update Frequency: every 60 seconds  (every 30 seconds for Pro API)
     * @param id The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
     * @param contractAddresses The contract address of tokens, comma separated
     * @param vsCurrencies vs_currency of coins, comma-separated if querying more than 1 vs_currency
     * *refers to <b>`simple/supported_vs_currencies`</b>
     * @param includeMarketCap <b>true/false</b> to include market_cap, <b>default: false</b>
     * @param include24HrVol <b>true/false</b> to include 24hr_vol, <b>default: false</b>
     * @param include24HrChange <b>true/false</b> to include 24hr_change, <b>default: false</b>
     * @param includeLastUpdatedAt <b>true/false</b> to include last_updated_at of price, <b>default: false</b>
     * @param precision <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value
     * @returns any price(s) of cryptocurrency
     * @throws ApiError
     */
    public getSimpleTokenPrice(
        id: string,
        contractAddresses: string,
        vsCurrencies: string,
        includeMarketCap?: string,
        include24HrVol?: string,
        include24HrChange?: string,
        includeLastUpdatedAt?: string,
        precision?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/simple/token_price/{id}',
            path: {
                'id': id,
            },
            query: {
                'contract_addresses': contractAddresses,
                'vs_currencies': vsCurrencies,
                'include_market_cap': includeMarketCap,
                'include_24hr_vol': include24HrVol,
                'include_24hr_change': include24HrChange,
                'include_last_updated_at': includeLastUpdatedAt,
                'precision': precision,
            },
        });
    }
    /**
     * Get list of supported_vs_currencies.
     * Cache / Update Frequency: every 60 seconds
     * @returns any list of supported_vs_currencies
     * @throws ApiError
     */
    public getSimpleSupportedVsCurrencies(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/simple/supported_vs_currencies',
        });
    }
}
