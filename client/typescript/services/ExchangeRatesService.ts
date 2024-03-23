/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExchangeRatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get BTC-to-Currency exchange rates
     * Get BTC-to-Currency exchange rates
     *
     * Cache / Update Frequency: every 60 seconds
     * @returns any List rates
     * @throws ApiError
     */
    public getExchangeRates(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/exchange_rates',
        });
    }
}
