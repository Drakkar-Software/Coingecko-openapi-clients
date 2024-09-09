/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GlobalService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get cryptocurrency global data
     * Get cryptocurrency global data
     *
     * Cache / Update Frequency: every 10 minutes
     * @returns any Get global data - total_volume, total_market_cap, ongoing icos etc
     * @throws ApiError
     */
    public getGlobal(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global',
        });
    }
    /**
     * Get cryptocurrency global decentralized finance(defi) data
     * Get Top 100 Cryptocurrency Global Eecentralized Finance(defi) data
     *
     * Cache / Update Frequency: every 60 minutes
     * @returns void
     * @throws ApiError
     */
    public getGlobalDecentralizedFinanceDefi(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global/decentralized_finance_defi',
        });
    }
}
