import BackToHome from "@/components/BackToHome";
import CustomLayout from "@/components/CustomLayout";

export default function About() {
  return (
    <CustomLayout>
      <main className="h-screen w-screen bg-green-300 flex flex-col min-h-0">
        <div className="px-6">
          <BackToHome className="pt-2" />
          <h1 className="text-xl pb-6 pt-4">About me</h1>
          <h2 className="text-2xl py-2">I&apos;m Giovanni Caiazzo</h2>
          <h3 className="text-sm">
            I am a React and React Native developer looking for exciting new
            opportunities to create unique and fun web and mobile apps.
          </h3>
        </div>
      </main>
    </CustomLayout>
  );
}
