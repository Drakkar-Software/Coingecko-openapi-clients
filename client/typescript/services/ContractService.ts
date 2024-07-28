/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ContractService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get coin info from contract address
     * Get coin info from contract address
     *
     * Cache / Update Frequency: every 60 seconds
     * @param id Asset platform (See asset_platforms endpoint for list of options)
     * @param contractAddress Token's contract address
     * @returns any Get current data for a coin
     * @throws ApiError
     */
    public getCoinsContract(
        id: string,
        contractAddress: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coins/{id}/contract/{contract_address}',
            path: {
                'id': id,
                'contract_address': contractAddress,
            },
        });
    }
    /**
     * Get historical market data include price, market cap, and 24h volume (granularity auto) from a contract address
     * Get historical market data include price, market cap, and 24h volume (granularity auto)
     *
     * Data granularity is automatic (cannot be adjusted) <b><ul><li>1 day from current time = 5 minute interval data</li><li>2 - 90 days from current time = hourly data</li><li>above 90 days from current time = daily data (00:00 UTC)</li></ul></b>
     *
     * Cache based on days range:<ul><li>1 day = 30 seconds cache</li><li>2-90 days = 30 minutes cache</li><li> 90 days = 12 hours cache</li></ul><p>The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35). The cache will always expire at 00:40 UTC.</p>
     * @param id The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
     * @param contractAddress Token's contract address
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days Data up to number of days ago (eg. 1,14,30,max)
     * @param precision <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value
     * @returns any Get historical market data include price, market cap, and 24h volume
     * @throws ApiError
     */
    public getCoinsContractMarketChart(
        id: string,
        contractAddress: string,
        vsCurrency: string,
        days: string,
        precision?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coins/{id}/contract/{contract_address}/market_chart/',
            path: {
                'id': id,
                'contract_address': contractAddress,
            },
            query: {
                'vs_currency': vsCurrency,
                'days': days,
                'precision': precision,
            },
        });
    }
    /**
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto) from a contract address
     * Get historical market data include price, market cap, and 24h volume (granularity auto)
     *
     * Data granularity is automatic (cannot be adjusted) <b><ul><li>1 day from current time = 5 minute interval data</li><li>2 - 90 days of date range = hourly data</li><li>above 90 days of date range = daily data (00:00 UTC)</li></ul></b>
     *
     * Cache / Update Frequency: every 5 minutes.
     * The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).
     * @param id The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
     * @param contractAddress Token's contract address
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param from From date in UNIX Timestamp (eg. 1392577232)
     * @param to To date in UNIX Timestamp (eg. 1422577232)
     * @param precision <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value
     * @returns any Get historical market data include price, market cap, and 24h volume
     * @throws ApiError
     */
    public getCoinsContractMarketChartRange(
        id: string,
        contractAddress: string,
        vsCurrency: string,
        from: string,
        to: string,
        precision?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coins/{id}/contract/{contract_address}/market_chart/range',
            path: {
                'id': id,
                'contract_address': contractAddress,
            },
            query: {
                'vs_currency': vsCurrency,
                'from': from,
                'to': to,
                'precision': precision,
            },
        });
    }
}
