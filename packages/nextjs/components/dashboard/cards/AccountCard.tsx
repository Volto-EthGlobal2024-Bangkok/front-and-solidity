"use client";

import { Balance } from "~~/components/scaffold-eth";
import { clsx } from "~~/components/utils";
import { useAccount } from "~~/app/(app)/account-components/AccountContext";
import { AddressWithoutCopy } from "~~/components/dashboard/cards/AddressWitoutCopy";

interface AccountCardProps {
  className?: string;
}

export const AccountCard = ({ className }: AccountCardProps) => {
  const { selectedAddress, connectWallet } = useAccount();
  return (
    <div className={clsx("card bg-base-100 shadow-xl min-w-[calc(427px + 30px)]", className)}>
      <div className="card-body p-4">
        <div className="flex flex-col gap-3 h-full justify-between">
          {selectedAddress ? (
            <>
              <div className="flex items-center justify-between">
                <Balance address={selectedAddress} />
              </div>
              <AddressWithoutCopy address={selectedAddress} format="long" className="truncate" />
            </>
          ) : (
            <button onClick={connectWallet} className="btn btn-primary">
              Connect Metamask
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
