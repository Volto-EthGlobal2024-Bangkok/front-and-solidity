import React from 'react';

interface Token {
  symbol: string;
  name: string;
  balance: string;
  price: string;
  value: string;
}

interface TokenItemProps {
  token: Token;
  onClick: () => void;
}

const TokenItem: React.FC<TokenItemProps> = ({ token, onClick }) => {
  return (
    <div 
      className="cursor-pointer hover:bg-base-200 p-4 transition-colors duration-200" 
      onClick={onClick}
    >
      <div className="grid grid-cols-5 gap-4 items-center">
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
          <div className="font-medium">{token.price}</div>
        </div>

        <div className="text-right">
          <span className="text-sm text-gray-500">Value</span>
          <div className="font-medium">{token.value}</div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-ghost btn-sm">
            Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenItem;
