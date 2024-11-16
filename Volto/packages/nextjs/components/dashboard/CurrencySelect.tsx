"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface Currency {
  code: string;
  name: string;
}

interface CurrencySelectProps {
  currencies: Currency[];
  defaultCurrency: string;
  onCurrencyChange?: (currency: Currency) => void;
}

export const CurrencySelect = ({ currencies, defaultCurrency, onCurrencyChange }: CurrencySelectProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState(
    currencies.find(c => c.code === defaultCurrency) || currencies[0],
  );

  const handleCurrencySelect = (currency: Currency) => {
    setSelectedCurrency(currency);
    onCurrencyChange?.(currency);
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost flex gap-1">
        <ChevronDownIcon className="w-4 h-4" />
        <span className="font-medium">{selectedCurrency.code}</span>
      </label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
        {currencies.map(currency => (
          <li key={currency.code}>
            <a onClick={() => handleCurrencySelect(currency)}>{currency.code}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
