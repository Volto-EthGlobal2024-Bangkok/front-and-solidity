"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const DashboardTabs = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-4">
        <div className="tabs tabs-boxed">
          <Link href="/assets" className={`tab ${pathname === "/assets" ? "tab-active" : ""}`}>
            Assets
          </Link>
          <Link href="/nfts" className={`tab ${pathname === "/nfts" ? "tab-active" : ""}`}>
            NFTs
          </Link>
          <Link href="/activity" className={`tab ${pathname === "/activity" ? "tab-active" : ""}`}>
            Activity
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};
