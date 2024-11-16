import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Transaction {
  amount: string;
  receiverAddress: string;
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
  // Hardcoded transactions
  const initialTransactions: Transaction[] = [
    {
      amount: "100",
      receiverAddress: "0x1234567890abcdef",
      token: "ETH",
      chain: "Ethereum",
      maxHoldTime: Date.now() + 60000, // 1 minute from now
    },
    {
      amount: "200",
      receiverAddress: "0xfedcba0987654321",
      token: "BTC",
      chain: "Bitcoin",
      maxHoldTime: Date.now() + 120000, // 2 minutes from now
    },
    // Add more transactions as needed
  ];

  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const addTransaction = (transaction: Transaction) => {
    setTransactions(prevTransactions => [...prevTransactions, transaction]);
  };

  return <TransactionContext.Provider value={{ transactions, addTransaction }}>{children}</TransactionContext.Provider>;
}; 
