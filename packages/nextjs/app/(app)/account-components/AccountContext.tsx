"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { BrowserProvider } from "ethers";

interface AccountContextType {
  addresses: string[];
  selectedAddress: string;
  email?: string;
  connectWallet: () => Promise<void>;
  setSelectedAddress: (address: string) => void;
  addAddress: (address: string) => void;
  removeAddress: (address: string) => void;
  setEmail: (email: string) => void;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export function AccountProvider({
  children,
  initialAddresses = [],
}: {
  children: ReactNode;
  initialAddresses?: string[];
}) {
  const storedAddress = localStorage.getItem("selectedAddress") || initialAddresses[0] || "";
  const [addresses, setAddresses] = useState<string[]>(initialAddresses);
  const [selectedAddress, setSelectedAddress] = useState<string>(storedAddress);
  const [email, setEmail] = useState<string>();

  const addAddress = (address: string) => {
    if (!addresses.includes(address.toLowerCase())) {
      setAddresses([...addresses, address.toLowerCase()]);
    }
  };

  const removeAddress = (address: string) => {
    setAddresses(addresses.filter(addr => addr.toLowerCase() !== address.toLowerCase()));
    if (selectedAddress.toLowerCase() === address.toLowerCase()) {
      setSelectedAddress(addresses[0] || "");
      localStorage.removeItem("selectedAddress");
    }
  };

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();

        if (accounts.length > 0) {
          const accountAddresses = await Promise.all(accounts.map(account => account.getAddress()));
          setAddresses(accountAddresses.map(address => address.toLowerCase()));
          setSelectedAddress(accountAddresses[0].toLowerCase());
          localStorage.setItem("selectedAddress", accountAddresses[0].toLowerCase());
        } else {
          const newAccounts = await provider.send("eth_requestAccounts", []);
          setAddresses(newAccounts.map((account: string) => account.toLowerCase()));
          setSelectedAddress(newAccounts[0].toLowerCase());
          localStorage.setItem("selectedAddress", newAccounts[0].toLowerCase());
        }
      } else {
        console.error("MetaMask is not installed.");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        addresses,
        selectedAddress,
        email,
        connectWallet,
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
