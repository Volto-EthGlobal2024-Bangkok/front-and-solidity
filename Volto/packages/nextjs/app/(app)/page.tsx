"use client";

import type { NextPage } from "next";
import { AccountCard } from "~~/components/dashboard/cards/AccountCard";

const Dashboard: NextPage = () => {
  return (
    <div className="space-y-8">
      <AccountCard address="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" balance="$1,234.56" />
    </div>
  );
};

export default Dashboard;
