/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AssetPlatformsService } from './services/AssetPlatformsService';
import { CategoriesService } from './services/CategoriesService';
import { CoinsService } from './services/CoinsService';
import { CompaniesBetaService } from './services/CompaniesBetaService';
import { ContractService } from './services/ContractService';
import { DerivativesService } from './services/DerivativesService';
import { ExchangeRatesService } from './services/ExchangeRatesService';
import { ExchangesService } from './services/ExchangesService';
import { GlobalService } from './services/GlobalService';
import { NftsBetaService } from './services/NftsBetaService';
import { PingService } from './services/PingService';
import { SearchService } from './services/SearchService';
import { SimpleService } from './services/SimpleService';
import { TrendingService } from './services/TrendingService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class CoingeckoAPIClient {
    public readonly assetPlatforms: AssetPlatformsService;
    public readonly categories: CategoriesService;
    public readonly coins: CoinsService;
    public readonly companiesBeta: CompaniesBetaService;
    public readonly contract: ContractService;
    public readonly derivatives: DerivativesService;
    public readonly exchangeRates: ExchangeRatesService;
    public readonly exchanges: ExchangesService;
    public readonly global: GlobalService;
    public readonly nftsBeta: NftsBetaService;
    public readonly ping: PingService;
    public readonly search: SearchService;
    public readonly simple: SimpleService;
    public readonly trending: TrendingService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.coingecko.com/api/v3',
            VERSION: config?.VERSION ?? '3.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.assetPlatforms = new AssetPlatformsService(this.request);
        this.categories = new CategoriesService(this.request);
        this.coins = new CoinsService(this.request);
        this.companiesBeta = new CompaniesBetaService(this.request);
        this.contract = new ContractService(this.request);
        this.derivatives = new DerivativesService(this.request);
        this.exchangeRates = new ExchangeRatesService(this.request);
        this.exchanges = new ExchangesService(this.request);
        this.global = new GlobalService(this.request);
        this.nftsBeta = new NftsBetaService(this.request);
        this.ping = new PingService(this.request);
        this.search = new SearchService(this.request);
        this.simple = new SimpleService(this.request);
        this.trending = new TrendingService(this.request);
    }
}

