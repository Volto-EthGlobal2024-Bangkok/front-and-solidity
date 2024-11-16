"use client";

import { PaperAirplaneIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Address, Balance } from "~~/components/scaffold-eth";
import { clsx } from "~~/components/utils";

interface AccountCardProps {
  addresses: string[];
  className?: string;
}

export const AccountCard = ({ addresses, className }: AccountCardProps) => {
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);

  return (
    <div className={clsx("card bg-base-100 shadow-xl min-w-[calc(427px + 30px)]", className)}>
      <div className="card-body p-4">
        <div className="flex flex-col gap-3 h-full justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Balance address={selectedAddress} />
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu w-[550px] p-2 shadow bg-base-100 rounded-box">
                  {addresses.map(address => (
                    <li key={address} onClick={() => setSelectedAddress(address)}>
                      <Address address={address} format="long" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Address address={selectedAddress} format="long" />
          </div>
          <div className="flex gap-2 w-full">
            <button className="btn btn-sm gap-2 flex-1">
              <PlusIcon className="h-4 w-4" />
              Add Account
            </button>
            <button className="btn btn-sm gap-2 flex-1">
              <PaperAirplaneIcon className="h-4 w-4" />
              Send To
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
