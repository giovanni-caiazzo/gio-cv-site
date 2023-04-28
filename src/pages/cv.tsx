import MainWithMenuLayout from "@/layouts/MainWithMenuLayout";

export default function CV() {
  return (
    <MainWithMenuLayout title="My CV">
      <div className="flex flex-col min-h-0 h-full">
        <object
          data="/my-cv.pdf"
          type="application/pdf"
          className="w-full h-full rounded shadow-2xl py-4"
        >
          <p className="italic text-gray-400">
            Unable to display PDF file. <a href={"/my-cv.pdf"}>Download it</a>{" "}
            instead.
          </p>
        </object>
      </div>
    </MainWithMenuLayout>
  );
}
