"use client";

import {  useRef, useEffect } from "react";
import {  Balance } from "~~/components/scaffold-eth";
import { clsx } from "~~/components/utils";
import { useAccount } from "~~/app/(app)/account-components/AccountContext";
import { AddressWithoutCopy } from "~~/components/dashboard/cards/AddressWitoutCopy";

interface AccountCardProps {
  className?: string;
}

export const AccountCard = ({ className }: AccountCardProps) => {
  const { selectedAddress } = useAccount();
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
            <Balance address={selectedAddress} />
          </div>
          <AddressWithoutCopy address={selectedAddress} format="long" className="truncate" />
        </div>
      </div>
    </div>
  );
};
