"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { CurrencySelect } from "./CurrencySelect";

const currencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },
];

const DashboardToolbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md rounded-box">
      <input type="text" placeholder="Search for wallet" className="input flex-1" />

      <div className="flex-none">
        <CurrencySelect
          currencies={currencies}
          defaultCurrency="USD"
          onCurrencyChange={currency => console.log("Currency changed to:", currency)}
        />

        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle">
            <ArrowPathIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardToolbar;
