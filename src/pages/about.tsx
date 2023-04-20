import BackToHome from "@/components/BackToHome";

export default function About() {
  return (
    <main className="h-screen w-screen bg-green-300 flex flex-col min-h-0">
      <div className="px-6">
        <BackToHome className="pt-2" />
        <h1 className="text-xl pb-6 pt-4">About me</h1>
      </div>
    </main>
  );
}
