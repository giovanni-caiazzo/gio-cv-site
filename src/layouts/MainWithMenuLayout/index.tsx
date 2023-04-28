import { ReactNode } from "react";
import CustomLayout from "@/layouts/CustomLayout";
import PageTitle from "@/components/PageTitle";

type MainWithMenuLayoutProps = { children: ReactNode; title: string };

const MainWithMenuLayout = ({ children, title }: MainWithMenuLayoutProps) => {
  return (
    <CustomLayout invertDirection>
      <main className="h-screen w-screen flex flex-col min-h-0 bg-gray-200">
        <PageTitle title={title} className="px-2 xs:px-6 bg-green-400" />
        <div className="px-2 xs:px-6 h-full">{children}</div>
      </main>
    </CustomLayout>
  );
};

export default MainWithMenuLayout;
