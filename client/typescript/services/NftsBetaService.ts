/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NftsBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all supported NFT ids, paginated by 100 items per page, paginated to 100 items
     * Use this to obtain all the NFT ids in order to make API calls, paginated to 100 items.
     *
     * Cache / Update Frequency: every 5 minutes
     * @param order valid values: <b>h24_volume_native_asc, h24_volume_native_desc, floor_price_native_asc, floor_price_native_desc, market_cap_native_asc, market_cap_native_desc, market_cap_usd_asc, market_cap_usd_desc</b>
     * @param assetPlatformId The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
     * @param perPage Valid values: 1..250<br>Total results per page
     * @param page Page through results
     * @returns any List all nfts with id, contract_address, name ...
     * @throws ApiError
     */
    public getNftsList(
        order?: string,
        assetPlatformId?: string,
        perPage?: number,
        page?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nfts/list',
            query: {
                'order': order,
                'asset_platform_id': assetPlatformId,
                'per_page': perPage,
                'page': page,
            },
        });
    }
    /**
     * Get current data (name, price_floor, volume_24h ...) for an NFT collection
     * Get current data (name, price_floor, volume_24h ...) for an NFT collection. native_currency (string) is only a representative of the currency.
     *
     * Cache / Update Frequency: every 60 seconds
     * @param id id of nft collection (can be obtained from /nfts/list)
     * @returns any display an NFT collection with name, price_floor, volume_24h ...
     * @throws ApiError
     */
    public getNfts(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nfts/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get current data (name, price_floor, volume_24h ...) for an NFT collection.
     * Get current data (name, price_floor, volume_24h ...) for an NFT collection.
     * *Solana NFT & Art Blocks are not supported for this endpoint, please use <b>`/nfts/{id}`</b> endpoint instead.
     *
     * Cache / Update Frequency: every 60 seconds
     * @param assetPlatformId The id of the platform issuing tokens (See asset_platforms endpoint for list of options, use filter=nft param)
     * @param contractAddress The contract_address of the nft collection (/nfts/list for list of nft collection with metadata)
     * @returns any display an NFT collection with name, price_floor, volume_24h ...
     * @throws ApiError
     */
    public getNftsContract(
        assetPlatformId: string,
        contractAddress: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nfts/{asset_platform_id}/contract/{contract_address}',
            path: {
                'asset_platform_id': assetPlatformId,
                'contract_address': contractAddress,
            },
        });
    }
}
