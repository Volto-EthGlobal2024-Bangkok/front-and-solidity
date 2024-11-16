"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const dashboardLinks = [
  {
    href: "/assets",
    label: "Assets",
  },
  {
    href: "/nfts",
    label: "NFTs",
  },
  {
    href: "/activity",
    label: "Activity",
  },
];

export const DashboardTabs = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-4">
        <div className="tabs tabs-boxed">
          {dashboardLinks.map(link => (
            <Link key={link.href} href={link.href} className={`tab ${pathname === link.href ? "tab-active" : ""}`}>
              {link.label}
            </Link>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
};
