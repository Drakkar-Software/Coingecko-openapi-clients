/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CoinsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all supported coins id, name and symbol (no pagination required)
     * <li>All the coins that show up on this <strong>/coins/list</strong> endpoint are Active coins that listed by CoinGecko team on CoinGecko.com</li><li>If a coin is inactive or deactivated, it will be removed from <strong>/coins/list</strong></li>
     *
     * Cache / Update Frequency: every 5 minutes
     * @param includePlatform flag to include platform contract addresses (eg. 0x.... for Ethereum based tokens).
     * valid values: true, false
     * @returns any List all coins with id, name, and symbol
     * @throws ApiError
     */
    public getCoinsList(
        includePlatform?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coins/list',
            query: {
                'include_platform': includePlatform,
            },
        });
    }
    /**
     * List all supported coins price, market cap, volume, and market related data
     * Use this to obtain all the coins market data (price, market cap, volume), per page.<br>Note: when both 'category' and 'ids' parameters are supplied, the 'category' parameter takes precedence over the 'ids' parameter.
     *
     * Cache / Update Frequency: every 45 seconds
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param ids The ids of the coin, comma separated crytocurrency symbols (base). refers to `/coins/list`.
     * @param category filter by coin category. Refer to /coin/categories/list
     * @param order valid values: <b>market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc</b>
     * sort results by field.
     * @param perPage valid values: 1..250
     * Total results per page
     * @param page Page through results
     * @param sparkline Include sparkline 7 days data (eg. true, false)
     * @param priceChangePercentage Include price change percentage in <b>1h, 24h, 7d, 14d, 30d, 200d, 1y</b> (eg. '`1h,24h,7d`' comma-separated, invalid values will be discarded)
     * @param locale valid values: <b>ar, bg, cs, da, de, el, en, es, fi, fr, he, hi, hr, hu, id, it, ja, ko, lt, nl, no, pl, pt, ro, ru, sk, sl, sv, th, tr, uk, vi, zh, zh-tw</b>
     * @param precision <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value
     * @returns any List all coins with market data
     * @throws ApiError
     */
    public getCoinsMarkets(
        vsCurrency: string,
        ids?: string,
        category?: string,
        order: string = 'market_cap_desc',
        perPage: number = 100,
        page: number = 1,
        sparkline: boolean = false,
        priceChangePercentage?: string,
        locale: string = 'en',
        precision?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coins/markets',
            query: {
                'vs_currency': vsCurrency,
                'ids': ids,
                'category': category,
                'order': order,
                'per_page': perPage,
                'page': page,
                'sparkline': sparkline,
                'price_change_percentage': priceChangePercentage,
                'locale': locale,
                'precision': precision,
            },
        });
    }
    /**
     * Get current data (name, price, market, ... including exchange tickers) for a coin
     * Get current data (name, price, market, ... including exchange tickers) for a coin.<br><br> **IMPORTANT**:
     * Ticker object is limited to 100 items, to get more tickers, use `/coins/{id}/tickers`
     * Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for more than 8 hours.
     * Ticker `is_anomaly` is true if ticker's price is outliered by our system.
     * You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
     *
     * Note: to check if a price is stale, please refer to `last_updated` of the price.
     *
     * Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li><li><strong>timestamp</strong>: returns the last time that the price has changed</li><li><strong>last_traded_at</strong>: returns the last time that the price has changed</li><li><strong>last_fetch_at</strong>: returns the last time we call the API</li>
     *
     * Cache / Update Frequency: every 60 seconds
     * Data for Twitter, Telegram and Reddit will be updated on daily basis.
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param localization Include all localized languages in response (true/false) <b>[default: true]</b>
     * @param tickers Include tickers data (true/false) <b>[default: true]</b>
     * @param marketData Include market_data (true/false) <b>[default: true]</b>
     * @param communityData Include community_data data (true/false) <b>[default: true]</b>
     * @param developerData Include developer_data data (true/false) <b>[default: true]</b>
     * @param sparkline Include sparkline 7 days data (eg. true, false) <b>[default: false]</b>
     * @returns any Get current data for a coin
     * @throws ApiError
     */
    public getCoins(
        id: string,
        localization?: string,
        tickers?: boolean,
        marketData?: boolean,
        communityData?: boolean,
        developerData?: boolean,
        sparkline?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coins/{id}',
            path: {
                'id': id,
            },
            query: {
                'localization': localization,
                'tickers': tickers,
                'market_data': marketData,
                'community_data': communityData,
                'developer_data': developerData,
                'sparkline': sparkline,
            },
        });
    }
    /**
     * Get coin tickers (paginated to 100 items)
     * Get coin tickers (paginated to 100 items)<br><br> **IMPORTANT**:
     * Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for more than 8 hours.
     * Ticker `is_anomaly` is true if ticker's price is outliered by our system.
     * You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
     *
     * Dictionary:<li><strong>last</strong>: latest unconverted price in the respective pair target currency</li><li><strong>volume</strong>: unconverted 24h trading volume in the respective pair target currency</li><li><strong>converted_last</strong>: latest converted price in BTC, ETH, and USD</li><li><strong>converted_volume</strong>: converted 24h trading volume in BTC, ETH, and USD</li><li><strong>timestamp</strong>: returns the last time that the price has changed</li><li><strong>last_traded_at</strong>: returns the last time that the price has changed</li><li><strong>last_fetch_at</strong>: returns the last time we call the API</li>
     *
     * Cache / Update Frequency: every 2 minutes
     * @param id pass the coin id (can be obtained from /coins/list) eg. bitcoin
     * @param exchangeIds filter results by exchange_ids (ref: v3/exchanges/list)
     * @param includeExchangeLogo flag to show exchange_logo. valid values: true, false
     * @param page Page through results
     * @param order valid values: <b>trust_score_desc (default), trust_score_asc and volume_desc</b>
     * @param depth flag to show 2% orderbook depth. i.e., cost_to_move_up_usd and cost_to_move_down_usd. valid values: true, false
     * @returns any Get coin tickers
     * @throws ApiError
     */
    public getCoinsTickers(
        id: string,
        exchangeIds?: string,
        includeExchangeLogo?: string,
        page?: number,
        order?: string,
        depth?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coins/{id}/tickers',
            path: {
                'id': id,
            },
            query: {
                'exchange_ids': exchangeIds,
                'include_exchange_logo': includeExchangeLogo,
                'page': page,
                'order': order,
                'depth': depth,
            },
        });
    }
    /**
     * Get historical data (price, market cap, 24hr volume, ..) at a given date for a coin.
     * Get historical data (price, market cap, 24hr volume, ..) at a given date for a coin.
     * The data returned is at 00:00:00 UTC.
     *
     * The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param date The date of data snapshot in dd-mm-yyyy eg. 30-12-2022
     * @param localization Set to false to exclude localized languages in response
     * @returns any Get historical data at a given date for a coin
     * @throws ApiError
     */
    public getCoinsHistory(
        id: string,
        date: string,
        localization?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coins/{id}/history',
            path: {
                'id': id,
            },
            query: {
                'date': date,
                'localization': localization,
            },
        });
    }
    /**
     * Get historical market data include price, market cap, and 24h volume (granularity auto)
     * Get historical market data include price, market cap, and 24h volume (granularity auto)
     *
     * Data granularity is automatic (cannot be adjusted) <b><ul><li>1 day from current time = 5 minute interval data</li><li>2 - 90 days from current time = hourly data</li><li>above 90 days from current time = daily data (00:00 UTC)</li></ul></b>
     *
     * Cache based on days range:<ul><li>1 day = 30 seconds cache</li><li>2-90 days = 30 minutes cache</li><li> 90 days = 12 hours cache</li></ul><p>The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35). The cache will always expire at 00:40 UTC.</p>
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days Data up to number of days ago (eg. 1,14,30,max)
     * @param interval Data interval. Possible value: daily
     * @param precision <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value
     * @returns any Get historical market data include price, market cap, and 24h volume
     * @throws ApiError
     */
    public getCoinsMarketChart(
        id: string,
        vsCurrency: string,
        days: string,
        interval?: string,
        precision?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coins/{id}/market_chart',
            path: {
                'id': id,
            },
            query: {
                'vs_currency': vsCurrency,
                'days': days,
                'interval': interval,
                'precision': precision,
            },
        });
    }
    /**
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
     * Get historical market data include price, market cap, and 24h volume (granularity auto)
     *
     * Data granularity is automatic (cannot be adjusted) <b><ul><li>1 day from current time = 5 minute interval data</li><li>2 - 90 days of date range = hourly data</li><li>above 90 days of date range = daily data (00:00 UTC)</li></ul></b>
     *
     * Cache / Update Frequency: every 5 minutes.
     * The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param from From date in UNIX Timestamp (eg. 1392577232)
     * @param to To date in UNIX Timestamp (eg. 1422577232)
     * @param precision <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value
     * @returns any Get historical market data include price, market cap, and 24h volume
     * @throws ApiError
     */
    public getCoinsMarketChartRange(
        id: string,
        vsCurrency: string,
        from: string,
        to: string,
        precision?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coins/{id}/market_chart/range',
            path: {
                'id': id,
            },
            query: {
                'vs_currency': vsCurrency,
                'from': from,
                'to': to,
                'precision': precision,
            },
        });
    }
    /**
     * Get coin's OHLC
     * Candle's body - data granularity is automatic (cannot be adjusted for public api users):
     * <ul><li>1 - 2 days: 30 minutes</li><li>3 - 30 days: 4 hours</li><li>31 days and beyond: 4 days</li></ul>
     * <p>Daily candle interval parameter is available for paid plan users only (Analyst/Lite/Pro/Enterprise), use <b><i>interval=daily</i></b> parameter in your request:</p>
     * <ul><li>'daily' interval: available for 1/7/14/30/90/180 days</li></ul>
     *
     * Cache / Update Frequency: every 30 minutes
     * The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).
     * @param id pass the coin id (can be obtained from /coins/list) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days  Data up to number of days ago (1/7/14/30/90/180/365/max)
     * @param precision <b>full</b> or any value between 0 - 18 to specify decimal place for currency price value
     * @returns number successful operation
     *
     * [
         * 1594382400000 (time),
         * 1.1 (open),
         * 2.2 (high),
         * 3.3 (low),
         * 4.4 (close)
         * ]
         * @throws ApiError
         */
        public getCoinsOhlc(
            id: string,
            vsCurrency: string,
            days: string,
            precision?: string,
        ): CancelablePromise<Array<number>> {
            return this.httpRequest.request({
                method: 'GET',
                url: '/coins/{id}/ohlc',
                path: {
                    'id': id,
                },
                query: {
                    'vs_currency': vsCurrency,
                    'days': days,
                    'precision': precision,
                },
            });
        }
    }
