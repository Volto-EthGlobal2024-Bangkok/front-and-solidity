import React, { createContext, useContext } from 'react';

interface Token {
  symbol: string;
  name: string;
  id: string;
  balance: number;
  price: number;
  value: number;
  tokenId: string;
  owner: string;
  status: string;
  lastUpdated: string;
}
const tokens: Token[] = [
  { symbol: "ETH", name: "Ethereum", id: "ethereum", price: 2245.67, balance: 0.5, value: 1122.835, tokenId: "0", owner: "", status: "active", lastUpdated: new Date().toISOString() },
  { symbol: "BTC", name: "Bitcoin", id: "bitcoin", price: 43250.82, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "USDT", name: "Tether", id: "tether", price: 1.00, balance: 100, value: 100, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "BNB", name: "Binance Coin", id: "binancecoin", price: 305.42, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "XRP", name: "XRP", id: "ripple", price: 0.62, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "SOL", name: "Solana", id: "solana", price: 98.45, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "ADA", name: "Cardano", id: "cardano", price: 0.52, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    id: "dogecoin",
    price: 0.08,
    balance: 1000,
    value: 80,
    tokenId: "",
    owner: "",
    status: "",
    lastUpdated: ""
  },
  { symbol: "MATIC", name: "Polygon", id: "matic-network", price: 0.85, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "DOT", name: "Polkadot", id: "polkadot", price: 7.23, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "DAI", name: "Dai", id: "dai", price: 1.00, balance: 250, value: 250, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "SHIB", name: "Shiba Inu", id: "shiba-inu", price: 0.000009, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "AVAX", name: "Avalanche", id: "avalanche-2", price: 34.76, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "LINK", name: "Chainlink", id: "chainlink", price: 14.82, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "UNI", name: "Uniswap", id: "uniswap", price: 6.12, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "ATOM", name: "Cosmos", id: "cosmos", price: 9.45, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "LTC", name: "Litecoin", id: "litecoin", price: 72.31, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "FTM", name: "Fantom", id: "fantom", price: 0.45, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "NEAR", name: "NEAR Protocol", id: "near", price: 3.28, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "AAVE", name: "Aave", id: "aave", price: 92.15, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "CRO", name: "Cronos", id: "crypto-com-chain", price: 0.09, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "ALGO", name: "Algorand", id: "algorand", price: 0.18, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" }
];

const TokenContext = createContext<Token[]>(tokens);

export const useTokens = () => useContext(TokenContext);

export const TokenProvider: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  return <TokenContext.Provider value={tokens}>{children}</TokenContext.Provider>;
};

export type { Token };
