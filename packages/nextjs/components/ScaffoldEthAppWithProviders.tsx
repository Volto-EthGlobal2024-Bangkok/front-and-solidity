"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useWeb3Auth } from "@web3auth/no-modal-react-hooks";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Toaster } from "react-hot-toast";
import { createWalletClient, custom } from "viem";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { withWeb3Auth } from "~~/hooks/Web3Provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const auth = useWeb3Auth();

  const walletClient = auth.provider
    ? createWalletClient({
        transport: custom(auth.provider),
      })
    : null;

  console.log(walletClient);

  // const addresses = await walletClient.getAddresses();

  // const smartAccountAddress = addresses[0];
  // const eoaAddress = addresses[1];

  return (
    <QueryClientProvider client={queryClient}>
      <ProgressBar height="3px" color="#2299dd" />
      <div className="flex flex-col min-h-screen bg-base-100/50">
        <Header />
        <main className="relative flex flex-col flex-1 min-h-screen">{children}</main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
};

export default withWeb3Auth(ScaffoldEthAppWithProviders);
