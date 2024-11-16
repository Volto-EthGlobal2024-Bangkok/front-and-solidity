"use client";

import { useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { useTokens, type Token } from "../(dashboard)/assets/TokenContext";

export default function SwapPage() {
  const [payToken, setPayToken] = useState<Token | null>(null);
  const [receiveToken, setReceiveToken] = useState<Token | null>(null);
  const [payAmount, setPayAmount] = useState<string>("0");
  const [receiveAmount, setReceiveAmount] = useState<string>("0");
  const [isConnecting, setIsConnecting] = useState(false);
  const tokens = useTokens();

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      // Add your swap connection logic here
    } catch (error) {
      console.error("Swap error:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-[500px] mx-auto mt-12">
      <h1 className="text-4xl font-bold text-center">Swap</h1>

      {/* Pay Section */}
      <div className="card bg-base-200">
        <div className="card-body p-4">
          <label className="text-sm mb-2">Pay</label>
          <div className="flex gap-4">
            <input
              type="number"
              value={payAmount}
              onChange={(e) => setPayAmount(e.target.value)}
              className="input input-ghost text-3xl w-full focus:outline-none px-0"
              placeholder="0"
            />
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost">
                {payToken ? payToken.symbol : "Select token"} 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                {tokens.map((token) => (
                  <li key={token.id} onClick={() => setPayToken(token)}>
                    <a>{token.symbol}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Swap Direction Button */}
      <div className="flex justify-center -my-3 z-10">
        <button className="btn btn-circle btn-ghost bg-base-200">
          <ArrowDownIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Receive Section */}
      <div className="card bg-base-200">
        <div className="card-body p-4">
          <label className="text-sm mb-2">Receive</label>
          <div className="flex gap-4">
            <input
              type="number"
              value={receiveAmount}
              onChange={(e) => setReceiveAmount(e.target.value)}
              className="input input-ghost text-3xl w-full focus:outline-none px-0"
              placeholder="0"
            />
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost">
                {receiveToken ? receiveToken.symbol : "Select token"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                {tokens.map((token) => (
                  <li key={token.id} onClick={() => setReceiveToken(token)}>
                    <a>{token.symbol}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Connect/Swap Button */}
      <button 
        className={`btn btn-primary w-full ${isConnecting ? "loading" : ""}`}
        onClick={handleConnect}
        disabled={isConnecting || !payToken || !receiveToken}
      >
        {isConnecting ? "Swapping..." : "Connect"}
      </button>
    </div>
  );
}
