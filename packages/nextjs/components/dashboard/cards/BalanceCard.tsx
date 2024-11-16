"use client";

import { Address, Balance } from "~~/components/scaffold-eth";
import { clsx } from "~~/components/utils";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface BalanceCardProps {
  // TODO: Replace with selected account from global state management
  address: string;
  className?: string;
}

export const BalanceCard = ({ address, className }: BalanceCardProps) => {
  return (
    <div className={clsx("card bg-base-100 shadow-xl", className)}>
      <div className="card-body p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-3">
            <Address address={address} format="long" className="text-xs opacity-70" />
            <div className="text-7xl font-bold">
              <Balance address={address} />
            </div>
          </div>
          <div className="flex gap-2 w-full">
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
