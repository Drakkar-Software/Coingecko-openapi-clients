/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DerivativesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all derivative tickers
     * List all derivative tickers.<br>Note: 'open_interest' and 'volume_24h' data are in USD
     *
     * Cache / Update Frequency: every 30 seconds
     * @returns any List all derivative tickers
     * @throws ApiError
     */
    public getDerivatives(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/derivatives',
        });
    }
    /**
     * List all derivative exchanges
     * List all derivative exchanges.
     *
     * Cache / Update Frequency: every 60 seconds
     * @param order order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc
     * @param perPage Total results per page
     * @param page Page through results
     * @returns any List all derivative exchanges
     * @throws ApiError
     */
    public getDerivativesExchanges(
        order?: string,
        perPage?: number,
        page?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/derivatives/exchanges',
            query: {
                'order': order,
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * show derivative exchange data
     * show derivative exchange data
     *
     * Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li>
     *
     * Cache / Update Frequency: every 30 seconds
     * @param id pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex
     * @param includeTickers ['all', 'unexpired'] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response
     * @returns any show derivative exchange data
     * @throws ApiError
     */
    public getDerivativesExchanges1(
        id: string,
        includeTickers?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/derivatives/exchanges/{id}',
            path: {
                'id': id,
            },
            query: {
                'include_tickers': includeTickers,
            },
        });
    }
    /**
     * List all derivative exchanges name and identifier
     * List all derivative exchanges name and identifier.
     *
     * Cache / Update Frequency: every 5 minutes
     * @returns any List all derivative exchanges name and identifier
     * @throws ApiError
     */
    public getDerivativesExchangesList(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/derivatives/exchanges/list',
        });
    }
}
