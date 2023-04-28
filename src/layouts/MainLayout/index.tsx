import { ReactNode } from "react";
import CustomLayout from "@/layouts/CustomLayout";

type MainLayoutProps = { children: ReactNode };

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <CustomLayout invertDirection>
      <main className="h-screen w-screen flex flex-col min-h-0 bg-gray-200">
        <div className="px-2 xs:px-6 h-full">{children}</div>
      </main>
    </CustomLayout>
  );
};

export default MainLayout;
