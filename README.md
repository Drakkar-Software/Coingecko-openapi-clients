# Coingecko OpenApi clients

## Global configuration
```
export COINGECKO_BASE_URL="https://api.coingecko.com/api/v3"
```

## Typescript ![https://www.npmjs.com/package/coingecko-openapi-client](https://img.shields.io/npm/v/coingecko-openapi-client)

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
