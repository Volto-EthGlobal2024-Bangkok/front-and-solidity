"use client";

import { DashboardLayout } from "~~/components/layout/DashboardLayout";
import { TransactionProvider } from "./transaction-components/TransactionContext";
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransactionProvider>
        <DashboardLayout>{children}</DashboardLayout>
    </TransactionProvider>
  );
};

export default AppLayout;
