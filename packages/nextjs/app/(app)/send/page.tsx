"use client";

import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useAccount } from "../account-components/AccountContext";
import { useTokens, type Token } from "../(dashboard)/assets/TokenContext";

export default function SendPage() {
  const { addresses, selectedAddress, setSelectedAddress } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const tokens = useTokens();

  return (
    <div className="flex flex-col gap-6 max-w-[500px] mx-auto mt-12">
      <h1 className="text-4xl font-bold text-center">Send</h1>

      {/* Sender Selection - Updated */}
      <div className="flex flex-col gap-2">
        <label className="text-sm">Sender</label>
        <div className="dropdown dropdown-bottom w-full">
          <div tabIndex={0} role="button" className="btn w-full justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-base-300 rounded-full" />
              <Address address={selectedAddress} format="long" />
            </div>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-full">
            {addresses.map((address) => (
              <li key={address}>
                <div className="w-full" onClick={() => setSelectedAddress(address)}>
                  <Address address={address} format="long" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recipient Input - Updated */}
      <div className="flex flex-col gap-2">
        <label className="text-sm">Recipient</label>
        <div className="flex gap-2">
          <div className="dropdown dropdown-bottom flex-1">
            <div tabIndex={0} role="button" className="btn w-full justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-base-300 rounded-full" />
                <span className="text-base-content/60">Select recipient...</span>
              </div>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-full">
              {addresses.filter(addr => addr !== selectedAddress).map((address) => (
                <li key={address}>
                  <div className="w-full">
                    <Address address={address} format="long" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-square" onClick={() => setIsModalOpen(true)}>
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Asset Selection - Updated */}
      <div className="flex flex-col gap-2">
        <label className="text-sm">Asset</label>
        <div className="dropdown dropdown-bottom w-full">
          <div tabIndex={0} role="button" className="btn w-full justify-between">
            {selectedToken ? (
              <span>{selectedToken.symbol} - {selectedToken.name}</span>
            ) : (
              <span className="text-base-content/60">Select an asset</span>
            )}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-full max-h-[300px] overflow-y-auto">
            {tokens.map((token) => (
              <li key={token.id} onClick={() => setSelectedToken(token)}>
                <a className="flex justify-between">
                  <span>{token.symbol} - {token.name}</span>
                  <span className="text-base-content/60">
                    {token.balance.toLocaleString()} {token.symbol}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Connect Button */}
      <button className="btn btn-primary w-full">
        Connect
      </button>

      {/* Add Address Modal */}
      <dialog className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Address</h3>
          <div className="py-4">
            <input type="text" placeholder="Enter address" className="input input-bordered w-full" />
          </div>
          <div className="modal-action">
            <button className="btn" onClick={() => setIsModalOpen(false)}>Close</button>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
