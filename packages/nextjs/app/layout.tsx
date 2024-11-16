import "@fontsource-variable/montserrat";
import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
import { AccountProvider } from "./(app)/account-components/AccountContext";

export const metadata = getMetadata({ title: "Scaffold-ETH 2 App", description: "Built with 🏗 Scaffold-ETH 2" });

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <AccountProvider>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>
            {children}
          </ScaffoldEthAppWithProviders>
        </ThemeProvider>
        </AccountProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
