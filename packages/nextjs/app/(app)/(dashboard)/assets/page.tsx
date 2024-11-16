"use client";

import React, { useState, useEffect } from 'react';
import TokenItem from './TokenItem';
import { useTokens } from './TokenContext';

const DashboardAssets: React.FC = () => {
  const tokens = useTokens();
  const [visibleCount, setVisibleCount] = useState(10);
  const [showMyTokens, setShowMyTokens] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
    </div>
  );
};

export default DashboardAssets;
