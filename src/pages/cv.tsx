import BackToHome from "@/components/BackToHome";
import CustomLayout from "@/components/CustomLayout";

export default function CV() {
  return (
    <CustomLayout>
      <main className="h-screen w-screen bg-green-300 flex flex-col min-h-0">
        <div className="px-6 flex flex-col min-h-0 h-full">
          <BackToHome className="pt-2" />
          <h1 className="text-xl pb-6 pt-4">My CV</h1>
          <object
            data="/my-cv.pdf"
            type="application/pdf"
            className="w-full h-full rounded shadow-2xl py-4"
          >
            <p className="italic text-gray-400">
              Unable to display PDF file. <a href={"/my-cv.pdf"}>Download</a>{" "}
              instead.
            </p>
          </object>
        </div>
      </main>
    </CustomLayout>
  );
}
