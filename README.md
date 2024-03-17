# Coingecko OpenApi clients

## Global configuration

```
export COINGECKO_BASE_URL="https://api.coingecko.com/api/v3"
```

API documentation available at https://docs.coingecko.com/v3.0.1/reference/introduction

## Typescript [![NPM](https://img.shields.io/npm/v/coingecko-openapi-client)](https://www.npmjs.com/package/coingecko-openapi-client)

### Install

```
npm i coingecko-openapi-client
yarn add coingecko-openapi-client
pnpm install coingecko-openapi-client
```

### Setup

```
pnpm install
pnpm build
```

### Usage

```
pnpm start
```

## Developers

### Regenerate client

Download the schema:

```
wget https://www.coingecko.com/api/documentations/v3/swagger.json -O swagger.json
```

#### Typescript

```
pnpx openapi-typescript-codegen --input swagger.json --output client/typescript --name CoingeckoAPIClient
```
