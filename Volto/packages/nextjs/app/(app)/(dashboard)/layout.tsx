"use client";

import { DashboardTabs } from "~~/components/dashboard/DashboardTabs";
import DashboardToolbar from "~~/components/dashboard/DashboardToolbar";
import { AccountCard } from "~~/components/dashboard/cards/AccountCard";
import { TokensCard } from "~~/components/dashboard/cards/TokensCard";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col gap-6">
      <section>
        <DashboardToolbar />
      </section>
      <section className="flex flex-row gap-6 flex-wrap">
        <AccountCard
          className="flex-grow"
          addresses={[
            "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
            "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
            "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
          ]}
        />
        <TokensCard tokens={[]} />
      </section>

      <DashboardTabs>{children}</DashboardTabs>
    </main>
  );
};

export default Dashboard;
