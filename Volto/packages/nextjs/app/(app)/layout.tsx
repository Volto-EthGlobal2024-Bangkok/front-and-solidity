import { DashboardLayout } from "~~/components/layout/DashboardLayout";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default AppLayout;
