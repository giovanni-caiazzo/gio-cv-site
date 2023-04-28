import BackToHome from "@/components/BackToHome";
type PageTitleProps = { title: string; className?: string };

const PageTitle = ({ title, className }: PageTitleProps) => {
  return (
    <div
      className={`flex flex-col xs:flex-row gap-2 xs:gap-6 xs:items-center py-2 ${className}`}
    >
      <BackToHome />
      <h1 className="text-xl underline underline-offset-4 decoration-4 decoration-gray-200">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
