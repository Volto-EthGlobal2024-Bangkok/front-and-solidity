"use client";

import React, { useState } from 'react';
import TransactionList from './TransactionList';
import { useTransactions } from './TransactionContext';

const OnHoldTransactions: React.FC = () => {
  const { transactions } = useTransactions();
  const [visibleCount, setVisibleCount] = useState(10);

  const handleReadMore = () => {
    setVisibleCount(prevCount => prevCount + 10);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between mb-4 px-4 py-2 bg-base-200 rounded-lg">
        <span className="flex-1 font-semibold">Amount</span>
        <span className="flex-1 font-semibold">Receiver Address</span>
        <span className="flex-1 font-semibold">Token</span>
        <span className="flex-1 font-semibold">Chain</span>
        <span className="flex-1 font-semibold">Time Left</span>
      </div>
      <TransactionList 
        transactions={transactions.slice(0, visibleCount).map(transaction => ({
          ...transaction,
          timeLeft: calculateTimeLeft(transaction.maxHoldTime),
        }))}/>
      {visibleCount < transactions.length && (
        <button onClick={handleReadMore} className="read-more-button">
          Read More
        </button>
      )}
    </div>
  );
};

export default OnHoldTransactions;

// Helper function to calculate time left
function calculateTimeLeft(maxHoldTime: number): string {
  const currentTime = Date.now();
  const timeLeft = maxHoldTime - currentTime;
  return timeLeft > 0 ? `${Math.floor(timeLeft / 1000)} seconds` : "Expired";
}
