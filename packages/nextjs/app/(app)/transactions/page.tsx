"use client";

import React, { useState, useEffect } from 'react';
import TransactionList from '../transaction-components/TransactionList';
import { useTransactions } from '../transaction-components/TransactionContext';

const DoneTransactions: React.FC = () => {
  const { transactions } = useTransactions();
  const [visibleCount, setVisibleCount] = useState(10);
  const [, setRefresh] = useState(0);

  // Filter for completed transactions only
  const completedTransactions = transactions.filter(transaction => transaction.status === "done");

  useEffect(() => {
    const timer = setInterval(() => {
      setRefresh(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        transactions={completedTransactions
          .slice(0, visibleCount)
          .map(transaction => ({
            ...transaction,
            timeLeft: calculateTimeLeft(Number(transaction.maxHoldTime)),
            id: transaction.id,
            amount: transaction.amount,
            date: transaction.date,
            status: transaction.status,
            from: transaction.from,
            to: transaction.to,
            token: transaction.token,
            chain: transaction.chain,
          }))}/>
      {visibleCount < completedTransactions.length && (
        <button onClick={handleReadMore} className="read-more-button">
          Read More
        </button>
      )}
    </div>
  );
};

export default DoneTransactions;

function calculateTimeLeft(maxHoldTime: number): string {
  const currentTime = Date.now();
  const timeLeft = maxHoldTime - currentTime;

  if (timeLeft <= 0) {
    return "Expired";
  }

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0) parts.push(`${seconds}s`);

  return parts.join(" ") || "Done";
}
