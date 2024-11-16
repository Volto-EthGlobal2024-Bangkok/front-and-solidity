import React from 'react';

interface Transaction {
  amount: string;
  receiverAddress: string;
  token: string;
  chain: string;
  timeLeft: string;
}

interface TransactionItemProps {
  transaction: Transaction;
  onClick: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onClick }) => {
  return (
    <div className="transaction-item" onClick={onClick}>
      <span className="transaction-detail">{transaction.amount}</span>
      <span className="transaction-detail">{transaction.receiverAddress}</span>
      <span className="transaction-detail">{transaction.token}</span>
      <span className="transaction-detail">{transaction.chain}</span>
      <span className="transaction-detail">{transaction.timeLeft}</span>
    </div>
  );
};

export default TransactionItem;
