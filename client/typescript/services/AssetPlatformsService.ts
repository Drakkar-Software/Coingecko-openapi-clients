/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AssetPlatformsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all asset platforms (Blockchain networks)
     * List all asset platforms
     * @param filter apply relevant filters to results
     * valid values: "nft" (asset_platform nft-support)
     * @returns any List all asset_platforms
     * @throws ApiError
     */
    public getAssetPlatforms(
        filter?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/asset_platforms',
            query: {
                'filter': filter,
            },
        });
    }
}
