import React from "react";
import { Token } from "./TokenContext";

interface TokenItemProps {
  token: Token;
  onClick: () => void;
}

const TokenItem: React.FC<TokenItemProps> = ({ token, onClick }) => {
  return (
    <div className="cursor-pointer hover:bg-base-200 p-4 transition-colors duration-200" onClick={onClick}>
      <div className="grid grid-cols-7 gap-4 items-center">
        <div className="col-span-1 flex items-center gap-2">
          <div className="font-bold text-lg">{token.symbol}</div>
          <div className="text-sm opacity-50">{token.name}</div>
        </div>

        <div className="text-right">
          <span className="text-sm text-gray-500">Balance</span>
          <div className="font-medium">{token.balance}</div>
        </div>

        <div className="text-right">
          <span className="text-sm text-gray-500">Price</span>
          <div className="font-medium">${token.price.toFixed(2)}</div>
        </div>

        <div className="text-right">
          <span className="text-sm text-gray-500">Token ID</span>
          <div className="font-medium">{token.tokenId}</div>
        </div>

        <div className="text-right">
          <span className="text-sm text-gray-500">Owner</span>
          <div className="font-medium">{token.owner}</div>
        </div>

        <div className="text-right">
          <span className="text-sm text-gray-500">Status</span>
          <div className="font-medium">{token.status}</div>
        </div>

        <div className="text-right">
          <span className="text-sm text-gray-500">Last Updated</span>
          <div className="font-medium">
            {new Date(token.lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenItem;
