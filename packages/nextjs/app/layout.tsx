import "@fontsource-variable/montserrat";
import "@rainbow-me/rainbowkit/styles.css";
import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3AuthContextConfig } from "@web3auth/no-modal-react-hooks";
import ScaffoldEthAppWithProviders from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({ title: "Scaffold-ETH 2 App", description: "Built with 🏗 Scaffold-ETH 2" });

const chainConfig: CustomChainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x1",
  rpcTarget: "https://rpc.ankr.com/eth",
  displayName: "Ethereum Mainnet",
  ticker: "ETH",
  tickerName: "Ethereum",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });

const web3Config: Web3AuthContextConfig = {
  web3AuthOptions: {
    clientId: process.env.NEXT_PUBLIC_WEB3_CLIENT_ID!,
    privateKeyProvider,
    chainConfig,
    web3AuthNetwork: "sapphire_devnet",
    uiConfig: {
      appName: "W3A Heroes",
      appUrl: "https://web3auth.io",
      logoLight: "https://web3auth.io/logo-light.png",
      logoDark: "https://web3auth.io/logo-dark.png",
      defaultLanguage: "en",
      useLogoLoader: true,
    },
  },
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
