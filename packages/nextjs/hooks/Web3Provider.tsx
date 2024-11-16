import { AccountAbstractionProvider, SafeSmartAccount } from "@web3auth/account-abstraction-provider";
import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3AuthContextConfig, Web3AuthProvider } from "@web3auth/no-modal-react-hooks";

const pimlicoAPIKey = process.env.NEXT_PUBLIC_PIMLICO_API_KEY!;

const chainConfig: CustomChainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x1",
  rpcTarget: "https://rpc.ankr.com/eth",
  displayName: "Ethereum Mainnet",
  ticker: "ETH",
  tickerName: "Ethereum",
};

const accountAbstractionProvider = new AccountAbstractionProvider({
  config: {
    chainConfig,
    smartAccountInit: new SafeSmartAccount(),
    bundlerConfig: {
      // Get the pimlico API Key from dashboard.pimlico.io
      url: `https://api.pimlico.io/v2/${chainConfig.chainId}/rpc?apikey=${pimlicoAPIKey}`,
    },
    paymasterConfig: {
      // Get the pimlico API Key from dashboard.pimlico.io
      url: `https://api.pimlico.io/v2/${chainConfig.chainId}/rpc?apikey=${pimlicoAPIKey}`,
    },
  },
});

const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });

const web3Config: Web3AuthContextConfig = {
  web3AuthOptions: {
    accountAbstractionProvider,
    // This will allow you to use EthereumPrivateKeyProvider for
    // external wallets, while use the AccountAbstractionProvider
    // for Web3Auth embedded wallets.
    useAAWithExternalWallet: false,
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

export const withWeb3Auth =
  (Component: ({ children }: { children: React.ReactNode }) => JSX.Element) =>
  // eslint-disable-next-line react/display-name
  (props: { children: React.ReactNode }) => (
    <Web3AuthProvider config={web3Config}>
      <Component {...props} />
    </Web3AuthProvider>
  );
