/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TrendingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get trending search coins (Top-7) on CoinGecko in the last 24 hours
     * * Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first).
     * * Top-5 trending NFTs on CoinGecko based on the highest trading volume in the last 24 hours
     *
     * Cache / Update Frequency: every 10 minutes
     * @returns any List trending coins by most popular first
     * @throws ApiError
     */
    public getSearchTrending(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/search/trending',
        });
    }
}
