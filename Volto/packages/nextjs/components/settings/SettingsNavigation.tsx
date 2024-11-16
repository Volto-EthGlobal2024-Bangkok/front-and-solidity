"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const settingsLinks = [
  {
    href: "/settings/accounts",
    label: "Manage accounts",
  },
  {
    href: "/settings/preferences",
    label: "Preferences",
  },
];

export const SettingsNavigation = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="card bg-base-100 min-h-[70vh] shadow-xl">
      <div className="card-body p-4">
        <div className="flex gap-6">
          <div className="w-1/3">
            <ul className="menu bg-base-100 rounded-box gap-1">
              {settingsLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`py-4 flex justify-between items-center ${pathname === link.href ? "text-primary" : ""}`}
                  >
                    {link.label}
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-2/3">{children}</div>
        </div>
      </div>
    </div>
  );
};
