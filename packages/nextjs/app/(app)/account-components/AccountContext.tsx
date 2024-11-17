"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
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
  const [storedAddress, setStoredAddress] = useState<string>(initialAddresses[0] || "");
  const [addresses, setAddresses] = useState<string[]>(initialAddresses);
  const [selectedAddress, setSelectedAddress] = useState<string>(storedAddress);
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const address = localStorage.getItem("selectedAddress") || initialAddresses[0] || "";
      setStoredAddress(address);
    }
  }, [initialAddresses]);

  const addAddress = (address: string) => {
    if (!addresses.includes(address.toLowerCase())) {
      setAddresses([...addresses, address.toLowerCase()]);
    }
  };

  const removeAddress = (address: string) => {
    setAddresses(addresses.filter(addr => addr.toLowerCase() !== address.toLowerCase()));
    if (typeof window !== "undefined" && selectedAddress.toLowerCase() === address.toLowerCase()) {
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
          if (typeof window !== "undefined") {
            localStorage.setItem("selectedAddress", accountAddresses[0].toLowerCase());
          }
        } else {
          const newAccounts = await provider.send("eth_requestAccounts", []);
          setAddresses(newAccounts.map((account: string) => account.toLowerCase()));
          setSelectedAddress(newAccounts[0].toLowerCase());
          if (typeof window !== "undefined") {
            localStorage.setItem("selectedAddress", newAccounts[0].toLowerCase());
          }
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
      {storedAddress && children}
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
