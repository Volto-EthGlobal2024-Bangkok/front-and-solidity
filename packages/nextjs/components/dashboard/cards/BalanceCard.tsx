"use client";

import {  Balance } from "~~/components/scaffold-eth";
import { clsx } from "~~/components/utils";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useAccount } from "~~/app/(app)/account-components/AccountContext";
import { AddressWithoutCopy } from "./AddressWitoutCopy";

interface BalanceCardProps {
  className?: string;
}

export const BalanceCard = ({ className }: BalanceCardProps) => {
  const { selectedAddress } = useAccount();

  return (
    <div className={clsx("card bg-base-100 shadow-xl", className)}>
      <div className="card-body p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-3">
            <AddressWithoutCopy address={selectedAddress} format="long" className="text-xs opacity-70" />
            <div className="text-7xl font-bold">
              <Balance address={selectedAddress} />
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
