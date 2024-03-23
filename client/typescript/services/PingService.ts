/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Check API server status
     * Check API server status
     *
     * @returns any Status OK
     * @throws ApiError
     */
    public getPing(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ping',
        });
    }
}
