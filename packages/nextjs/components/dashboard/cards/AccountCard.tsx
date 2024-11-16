"use client";

import { PlusIcon } from "@heroicons/react/24/outline"
import {  useRef, useEffect } from "react";
import {  Balance } from "~~/components/scaffold-eth";
import { clsx } from "~~/components/utils";
import { useAccount } from "~~/app/(app)/account-components/AccountContext";
import { AddressWithoutCopy } from "~~/components/dashboard/cards/AddressWitoutCopy";

interface AccountCardProps {
  className?: string;
}

export const AccountCard = ({ className }: AccountCardProps) => {
  const { addresses, selectedAddress, setSelectedAddress, addAddress } = useAccount();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDropdownPosition = () => {
      if (dropdownRef.current) {
        const dropdown = dropdownRef.current;
        const rect = dropdown.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        if (rect.right > viewportWidth) {
          dropdown.style.left = 'auto';
          dropdown.style.right = '0';
        } else {
          dropdown.style.left = '0';
          dropdown.style.right = 'auto';
        }
      }
    };

    handleDropdownPosition();
    window.addEventListener('resize', handleDropdownPosition);

    return () => {
      window.removeEventListener('resize', handleDropdownPosition);
    };
  }, []);

  return (
    <div className={clsx("card bg-base-100 shadow-xl min-w-[calc(427px + 30px)]", className)}>
      <div className="card-body p-4">
        <div className="flex flex-col gap-3 h-full justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="dropdown dropdown-start">
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
                <ul
                  tabIndex={0}
                  className="dropdown-content p-2 shadow bg-base-100 rounded-box"
                  style={{ zIndex: 9999 }}
                >
                  {addresses.map((address: string) => (
                    <li key={address} onClick={() => setSelectedAddress(address)}>
                      <AddressWithoutCopy address={address} format="long" />
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                className="btn btn-ghost btn-sm ml-2"
                onClick={() => {
                  const newAddress = "0x..."; // Replace with actual new address logic
                  addAddress(newAddress);
                }}
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
            <Balance address={selectedAddress} />
          </div>
          <AddressWithoutCopy address={selectedAddress} format="long" className="truncate" />
          <div className="flex gap-2 w-full">
{/*             <button className="btn btn-sm flex-1">
              <PaperAirplaneIcon className="h-4 w-4" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
