"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AccountContextType {
  addresses: string[];
  selectedAddress: string;
  email?: string;
  setSelectedAddress: (address: string) => void;
  addAddress: (address: string) => void;
  removeAddress: (address: string) => void;
  setEmail: (email: string) => void;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export function AccountProvider({ children, initialAddresses = [
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
] }: { children: ReactNode; initialAddresses?: string[] }) {
  const [addresses, setAddresses] = useState<string[]>(initialAddresses);
  const [selectedAddress, setSelectedAddress] = useState<string>(initialAddresses[0] || "");
  const [email, setEmail] = useState<string>();

  const addAddress = (address: string) => {
    if (!addresses.includes(address)) {
      setAddresses([...addresses, address]);
    }
  };

  const removeAddress = (address: string) => {
    setAddresses(addresses.filter(addr => addr !== address));
    if (selectedAddress === address) {
      setSelectedAddress(addresses[0]);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        addresses,
        selectedAddress,
        email,
        setSelectedAddress,
        addAddress,
        removeAddress,
        setEmail,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error("useAccount must be used within an AccountProvider");
  }
  return context;
}
