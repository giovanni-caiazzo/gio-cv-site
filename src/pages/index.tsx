import DragControl from "@/components/DragControl";
import CustomLayout from "@/components/CustomLayout";

export default function Home() {
  return (
    <CustomLayout invertDirection>
      <main className="h-screen w-screen flex flex-col min-h-0 bg-gray-200">
        <div className="px-6">
          <h1 className="text-6xl pt-6 font-bold text-green-500">Hi!</h1>
          <h2 className="text-2xl py-2">I&apos;m Giovanni Caiazzo</h2>
          <h3 className="text-sm">
            I am a React and React Native developer looking for exciting new
            opportunities to create unique and fun web and mobile apps.
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <DragControl />
        </div>
      </main>
    </CustomLayout>
  );
}
