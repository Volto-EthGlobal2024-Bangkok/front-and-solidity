import React, { useState } from "react";

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

interface TransactionItemProps {
  transaction: Transaction;
  onClick: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onClick }) => {
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const receiverAddress = transaction.to;

  const handleCopyToClipboard = (address: string) => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        setCopySuccess("Address copied to clipboard!");
        setTimeout(() => setCopySuccess(null), 3000); // Clear message after 3 seconds
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      className="grid grid-cols-5 gap-4 items-center cursor-pointer hover:bg-base-200 p-4 transition-colors duration-200"
      onClick={onClick}
    >
      <div className="flex-1 font-medium">{transaction.amount}</div>
      <div
        className="flex-1 font-medium truncate max-w-xs"
        onClick={() => handleCopyToClipboard(receiverAddress)}
        title={receiverAddress}
      >
        {receiverAddress}
      </div>
      <div className="flex-1 font-medium">{transaction.token}</div>
      <div className="flex-1 font-medium">{transaction.chain}</div>
      <div className="flex-1 font-medium">{transaction.timeLeft}</div>
      {copySuccess && <div className="text-sm text-green-500">{copySuccess}</div>}
    </div>
  );
};

export default TransactionItem;
