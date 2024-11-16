import React from 'react';
import TransactionItem from "./TransactionItem";

interface Transaction {
  id: string;
  amount: string;
  date: string;
  status: string;
  from: string;
  to: string;
  token: string;
  chain: string;
  timeLeft: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div>
      {transactions.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} onClick={() => {}} />
      ))}
    </div>
  );
};

export default TransactionList;
