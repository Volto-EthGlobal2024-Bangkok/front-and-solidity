"use client";

import DashboardToolbar from "~~/components/dashboard/DashboardToolbar";
import { SettingsNavigation } from "~~/components/settings/SettingsNavigation";

const Settings = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col gap-6">
      <section>
        <DashboardToolbar />
      </section>

      <SettingsNavigation>{children}</SettingsNavigation>
    </main>
  );
};

export default Settings;
