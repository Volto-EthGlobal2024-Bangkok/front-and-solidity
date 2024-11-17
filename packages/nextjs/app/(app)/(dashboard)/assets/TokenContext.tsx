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
  { symbol: "USDT", name: "Tether", id: "tether", price: 1.00, balance: 100, value: 100, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "BNB", name: "Binance Coin", id: "binancecoin", price: 305.42, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "MATIC", name: "Polygon", id: "matic-network", price: 0.85, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "DAI", name: "Dai", id: "dai", price: 1.00, balance: 250, value: 250, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "LINK", name: "Chainlink", id: "chainlink", price: 14.82, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
  { symbol: "UNI", name: "Uniswap", id: "uniswap", price: 6.12, balance: 0, value: 0, tokenId: "", owner: "", status: "", lastUpdated: "" },
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
