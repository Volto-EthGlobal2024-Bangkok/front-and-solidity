"use client";

import React, { useState, useEffect } from 'react';
import TokenItem from './TokenItem';
import { useTokens } from './TokenContext';
import dynamic from 'next/dynamic';
import { BrowserProvider } from "ethers";

const DashboardAssets: React.FC = () => {
  const IDKitWidgetComponent = dynamic(() => import('../../../../components/IDKitWidgetComponent'), { ssr: false });
  const tokens = useTokens();
  const [visibleCount, setVisibleCount] = useState(10);
  const [showMyTokens, setShowMyTokens] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if wallet is connected
    const checkWalletConnection = async () => {
      try {
        if (typeof window.ethereum !== "undefined") {
          const provider = new BrowserProvider(window.ethereum);
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            setWalletConnected(true);
          } else {
            // Prompt user to connect wallet
            await provider.send("eth_requestAccounts", []);
            setWalletConnected(true);
          }
        } else {
          console.error("MetaMask is not installed.");
        }
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    };

    checkWalletConnection();
  }, []);

  const handleReadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  const filteredTokens = showMyTokens 
    ? tokens.filter(token => parseFloat(token.balance?.toString() || "0") > 0) 
    : tokens;

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="w-full">
      {!walletConnected ? (
        <div className="flex items-center justify-center h-screen">
          <p>Please connect your MetaMask wallet to view assets.</p>
        </div>
      ) : (
        <>
          <IDKitWidgetComponent />
          <div className="form-control mb-4">
            <label className="label cursor-pointer">
              <span className="label-text">Hide Zero Balances</span>
              <input 
                type="checkbox" 
                className="toggle toggle-primary" 
                checked={showMyTokens} 
                onChange={() => setShowMyTokens(!showMyTokens)} 
              />
            </label>
          </div>
          {filteredTokens.slice(0, visibleCount).map((token, index) => (
            <TokenItem 
              key={index} 
              token={{ 
                ...token, 
                balance: token.balance || 0,
                value: token.value || 0,
                price: token.price || 0,
                tokenId: token.id || "",
                owner: token.owner || "Unknown",
                status: token.status || "Unknown",
                lastUpdated: token.lastUpdated || new Date().toISOString()
              }} 
              onClick={() => console.log(`Clicked on ${token.name}`)} 
            /> 
          ))}
          {visibleCount < filteredTokens.length && (
            <button onClick={handleReadMore} className="read-more-button">
              Read More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default DashboardAssets;
