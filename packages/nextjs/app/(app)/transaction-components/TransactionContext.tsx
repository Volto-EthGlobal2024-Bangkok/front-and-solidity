"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

interface Transaction {
  id: string;
  amount: string;
  date: string;
  status: string;
  from: string;
  to: string;
  token: string;
  chain: string;
  maxHoldTime: number;
}

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const useTransactions = (): TransactionContextType => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransactions must be used within a TransactionProvider");
  }
  return context;
};

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionProvider: React.FC<TransactionProviderProps> = ({ children }) => {
  const initialTransactions: Transaction[] = [
    {
      id: "1",
      amount: "100",
      date: new Date().toISOString(),
      status: "pending",
      from: "0xabcdef1234567890", 
      to: "0x1234567890abcdef",
      token: "ETH",
      chain: "Ethereum",
      maxHoldTime: Date.now() + 60000,
    },
    {
      id: "2", 
      amount: "200",
      date: new Date().toISOString(),
      status: "pending",
      from: "0xfedcba0987654321",
      to: "0xfedcba0987654321", 
      token: "BTC",
      chain: "Bitcoin",
      maxHoldTime: Date.now() + 120000,
    },
    {
      id: "3",
      amount: "150",
      date: new Date().toISOString(),
      status: "pending", 
      from: "0x1a2b3c4d5e6f7890",
      to: "0x9876543210fedcba",
      token: "USDT",
      chain: "Polygon",
      maxHoldTime: Date.now() + 5 * 60 * 1000,
    },
    {
      id: "4",
      amount: "300",
      date: new Date().toISOString(),
      status: "done",
      from: "0x2468ace0246810ac",
      to: "0x1357bdf1357bdf13",
      token: "MATIC",
      chain: "Polygon",
      maxHoldTime: Date.now() - 1,
    },
    {
      id: "5",
      amount: "500",
      date: new Date().toISOString(),
      status: "done",
      from: "0xaaaa1111bbbb2222",
      to: "0xcccc3333dddd4444",
      token: "USDC",
      chain: "Ethereum",
      maxHoldTime: Date.now() - 1,
    },
    {
      id: "6",
      amount: "1000",
      date: new Date().toISOString(),
      status: "pending",
      from: "0x1111aaaa2222bbbb",
      to: "0x3333cccc4444dddd",
      token: "ETH",
      chain: "Ethereum",
      maxHoldTime: Date.now() + 20 * 60 * 1000,
    },
    {
      id: "7",
      amount: "250",
      date: new Date().toISOString(),
      status: "pending",
      from: "0xabcd1234efgh5678",
      to: "0x8765hgfe4321dcba",
      token: "BNB",
      chain: "BSC",
      maxHoldTime: Date.now() + 25 * 60 * 1000,
    },
    {
      id: "8",
      amount: "750",
      date: new Date().toISOString(),
      status: "pending",
      from: "0x9999888877776666",
      to: "0x5555444433332222",
      token: "AVAX",
      chain: "Avalanche",
      maxHoldTime: Date.now() + 30 * 60 * 1000,
    },
    {
      id: "9",
      amount: "450",
      date: new Date().toISOString(),
      status: "pending",
      from: "0xaaaa bbbbccccdddd",
      to: "0xeeeeffffgggghhhh",
      token: "SOL",
      chain: "Solana",
      maxHoldTime: Date.now() + 35 * 60 * 1000,
    },
    {
      id: "10",
      amount: "600",
      date: new Date().toISOString(),
      status: "pending",
      from: "0x1a1a2b2b3c3c4d4d",
      to: "0x5e5e6f6f7g7g8h8h",
      token: "DOT",
      chain: "Polkadot",
      maxHoldTime: Date.now() + 40 * 60 * 1000,
    },
    {
      id: "11",
      amount: "800",
      date: new Date().toISOString(),
      status: "pending",
      from: "0x2468ace02468ace0",
      to: "0x1357bdf1357bdf13",
      token: "LINK",
      chain: "Ethereum",
      maxHoldTime: Date.now() + 45 * 60 * 1000,
    },
    {
      id: "12",
      amount: "900",
      date: new Date().toISOString(),
      status: "pending",
      from: "0xabcdefabcdefabcd",
      to: "0x1234567812345678",
      token: "UNI",
      chain: "Ethereum",
      maxHoldTime: Date.now() + 50 * 60 * 1000,
    },
    // Add more transactions as needed
  ];

  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const addTransaction = (transaction: Transaction) => {
    setTransactions(transactions => [...transactions, transaction]);
  };

  return <TransactionContext.Provider value={{ transactions, addTransaction }}>{children}</TransactionContext.Provider>;
}; 

export type { Transaction };
