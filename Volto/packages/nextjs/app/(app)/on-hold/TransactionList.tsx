import React from 'react';
import TransactionItem from './TransactionItem';

interface Transaction {
  amount: string;
  receiverAddress: string;
  token: string;
  chain: string;
  timeLeft: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="transaction-list">
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={index}
          transaction={transaction}
          onClick={() => console.log(`Clicked on transaction to ${transaction.receiverAddress}`)}
        />
      ))}
    </div>
  );
};

export default TransactionList;
