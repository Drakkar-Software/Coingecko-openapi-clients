/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExchangesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all exchanges (Active with trading volumes)
     * List all exchanges
     *
     * Cache / Update Frequency: every 60 seconds
     * @param perPage Valid values: 1...250
     * Total results per page
     * Default value:: 100
     * @param page page through results
     * @returns any List all exchanges
     * @throws ApiError
     */
    public getExchanges(
        perPage?: number,
        page?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/exchanges',
            query: {
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * List all supported markets id and name (no pagination required)
     * Use this to obtain all the markets' id in order to make API calls
     *
     * Cache / Update Frequency: every 5 minutes
     * @returns any List all coins with id and name
     * @throws ApiError
     */
    public getExchangesList(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/exchanges/list',
        });
    }
    /**
     * Get exchange volume in BTC and top 100 tickers only
     * Get exchange volume in BTC and tickers.<br>For derivatives (e.g. bitmex, binance_futures), please use `/derivatives/exchange/{id}` endpoint.<br><br> **IMPORTANT**:
     * Ticker object is limited to 100 items, to get more tickers, use `/exchanges/{id}/tickers`
     * Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for more than 8 hours.
     * Ticker `is_anomaly` is true if ticker's price is outliered by our system.
     * You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
     *
     * Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li><li><strong>timestamp</strong>: returns the last time that the price has changed</li><li><strong>last_traded_at</strong>: returns the last time that the price has changed</li><li><strong>last_fetch_at</strong>: returns the last time we call the API</li>
     *
     * Cache / Update Frequency: every 60 seconds
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @returns any Get exchange volume in BTC and top 100 tickers
     * @throws ApiError
     */
    public getExchanges1(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/exchanges/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get exchange tickers (paginated, 100 tickers per page)
     * Get exchange tickers (paginated)<br><br> **IMPORTANT**:
     * Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for more than 8 hours.
     * Ticker `is_anomaly` is true if ticker's price is outliered by our system.
     * You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
     *
     * Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li><li><strong>timestamp</strong>: returns the last time that the price has changed</li><li><strong>last_traded_at</strong>: returns the last time that the price has changed</li><li><strong>last_fetch_at</strong>: returns the last time we call the API</li>
     *
     * Cache / Update Frequency: every 60 seconds
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @param coinIds filter tickers by coin_ids (ref: v3/coins/list)
     * @param includeExchangeLogo flag to show exchange_logo. valid values: true, false
     * @param page Page through results
     * @param depth flag to show 2% orderbook depth. i.e., cost_to_move_up_usd and cost_to_move_down_usd. valid values: true, false
     * @param order valid values: <b>trust_score_desc (default), trust_score_asc and volume_desc</b>
     * @returns any Get exchange tickers
     * @throws ApiError
     */
    public getExchangesTickers(
        id: string,
        coinIds?: string,
        includeExchangeLogo?: string,
        page?: number,
        depth?: string,
        order?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/exchanges/{id}/tickers',
            path: {
                'id': id,
            },
            query: {
                'coin_ids': coinIds,
                'include_exchange_logo': includeExchangeLogo,
                'page': page,
                'depth': depth,
                'order': order,
            },
        });
    }
    /**
     * Get 24 hour rolling trading volume data (in BTC) for a given exchange.
     * Get 24 hour rolling trading volume data (in BTC) for a given exchange.
     *
     * <b>Data granularity is automatic (cannot be adjusted)</b><ul><li>1 day = 10-minutely</li><li>2-90 days = hourly</li><li>91 days above = daily</li></ul>
     * <p>Note: exclusive endpoint is available for paid users to query more than 1 year of historical data</p>
     *
     * Cache / Update Frequency: every 60 seconds
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @param days  Data up to number of days ago (1/7/14/30/90/180/365)
     * @returns any Get exchange volume_chart data
     * @throws ApiError
     */
    public getExchangesVolumeChart(
        id: string,
        days: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/exchanges/{id}/volume_chart',
            path: {
                'id': id,
            },
            query: {
                'days': days,
            },
        });
    }
}
