"use client";

import { useState } from "react";
import { AddressWithoutCopy } from "~~/components/dashboard/cards/AddressWitoutCopy";
import { useAccount } from "../account-components/AccountContext";
import { useTokens, type Token } from "../(dashboard)/assets/TokenContext";
import { useTransactions, type Transaction } from "../transaction-components/TransactionContext";

export default function SendPage() {
  const { addresses } = useAccount();
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [saveGasEnabled, setSaveGasEnabled] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string>("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const tokens = useTokens();
  const { addTransaction } = useTransactions();

  const handleConnect = async () => {
    try {
      setIsConnecting(true);

      const newTransaction: Transaction = {
        id: Date.now().toString(),
        amount: amount,
        date: new Date().toISOString(),
        status: "done",
        from: addresses[0],
        to: newAddress,
        token: selectedToken ? selectedToken.symbol : "",
        chain: "Ethereum",
        maxHoldTime: selectedDays ? parseInt(selectedDays) * 24 * 60 * 60 * 1000 : 0,
      };
      addTransaction(newTransaction);
      console.log("Transaction added:", newTransaction);

      /* toast.success("Transaction completed successfully!", {
        className: "toast-normal",
        bodyClassName: "text-sm",
        autoClose: 3000,
      }); */

      if (!saveGasEnabled) {
        console.log("Transaction completed without saving gas.");
      }
      
    } catch (error) {
      console.error("Connection error:", error);
      /* toast.error("Transaction failed!", {
        className: "toast-normal",
        bodyClassName: "text-sm",
        autoClose: 3000,
      }); */
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-[500px] mx-auto mt-12">
      <h1 className="text-4xl font-bold text-center">Send</h1>

      {/* Sender Selection */}
      <div className="flex flex-col gap-2">
        <label className="text-sm">Sender</label>
        <div className="btn w-full justify-between">
          <div className="flex items-center gap-2">
            <AddressWithoutCopy address={addresses[0]} format="long" />
          </div>
        </div>
      </div>

      {/* Recipient Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm">Recipient</label>
        <input 
          type="text" 
          placeholder="Enter recipient address" 
          className="input input-bordered w-full mt-2" 
          value={newAddress} 
          onChange={(e) => setNewAddress(e.target.value)} 
        />
      </div>

      {/* Asset and Amount Selection */}
      <div className="flex flex-col gap-2">
        <label className="text-sm">Asset and Amount</label>
        <div className="flex gap-2">
          <div className="dropdown dropdown-bottom w-full">
            <div tabIndex={0} role="button" className="btn w-full justify-between">
              {selectedToken ? (
                <span>{selectedToken.symbol} - {selectedToken.name}</span>
              ) : (
                <span className="text-base-content/60">Select an asset</span>
              )}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-full max-h-[300px] overflow-y-auto">
              {tokens.map((token) => (
                <li key={token.id} onClick={() => setSelectedToken(token)}>
                  <a className="flex justify-between">
                    <span>{token.symbol} - {token.name}</span>
                    <span className="text-base-content/60">
                      {token.balance.toLocaleString()} {token.symbol}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <input 
            type="text" 
            placeholder="Amount" 
            className="input input-bordered w-full" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
      </div>

      {/* Save Gas Option */}
      <div className="flex flex-col gap-2">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Save gas</span>
            <input
              type="checkbox" 
              className="toggle toggle-primary"
              checked={saveGasEnabled}
              onChange={(e) => setSaveGasEnabled(e.target.checked)}
            />
          </label>
        </div>
        {saveGasEnabled && (
          <div className="dropdown dropdown-bottom w-full">
            <div tabIndex={0} role="button" className="btn w-full justify-between">
              <span>{selectedDays || "Select waiting period"}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-full">
              {[1, 2, 3, 4, 5].map((day) => (
                <li key={day} onClick={() => setSelectedDays(`${day} day${day > 1 ? 's' : ''}`)}>
                  <a>{day} day{day > 1 ? 's' : ''}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Connect Button */}
      <button 
        className={`btn btn-primary w-full ${isConnecting ? "loading" : ""}`}
        onClick={handleConnect}
        disabled={isConnecting}
      >
        {isConnecting ? "Sending..." : "Send"}
      </button>
    </div>
  );
}
