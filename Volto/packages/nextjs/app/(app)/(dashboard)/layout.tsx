"use client";

import { DashboardTabs } from "~~/components/dashboard/DashboardTabs";
import DashboardToolbar from "~~/components/dashboard/DashboardToolbar";
import { BalanceCard } from "~~/components/dashboard/cards/BalanceCard";
import CryptoTrendChart from "~~/components/CryptoTrendChart";
import { TransactionProvider } from "./on-hold/TransactionContext";

const data = [
  {
    id: "crypto",
    data: [
      { x: "2023-01-01", y: 30000 },
      { x: "2023-01-02", y: 29800 },
      { x: "2023-01-03", y: 31200 },
      { x: "2023-01-04", y: 30600 },
      { x: "2023-01-05", y: 32100 },
      { x: "2023-01-06", y: 31400 },
      { x: "2023-01-07", y: 29900 },
      { x: "2023-01-08", y: 30800 },
      { x: "2023-01-09", y: 32400 },
      { x: "2023-01-10", y: 31700 },
      { x: "2023-01-11", y: 30500 },
      { x: "2023-01-12", y: 31900 },
      { x: "2023-01-13", y: 33200 },
      { x: "2023-01-14", y: 32100 },
      { x: "2023-01-15", y: 32900 },
    ],
  },
];

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col gap-6">
      <section>
        <DashboardToolbar />
      </section>
      <section className="flex flex-row gap-6">
        <div className="flex-1">
          <BalanceCard address="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" />
        </div>
{/* {         <div className="flex-1">
          <CryptoTrendChart />
        </div> } */}
      </section>
      <DashboardTabs>{children}</DashboardTabs>

    </main>
  );
};

export default Dashboard;
