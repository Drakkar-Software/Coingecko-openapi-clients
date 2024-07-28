/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SearchService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search for coins, categories and markets on CoinGecko
     * Search for coins, categories and markets listed on CoinGecko ordered by largest Market Cap first.
     *
     * Cache / Update Frequency: every 15 minutes
     * @param query Search string
     * @returns any List of coins, categories and markets matching search term ordered by market cap
     * @throws ApiError
     */
    public getSearch(
        query: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/search',
            query: {
                'query': query,
            },
        });
    }
}
