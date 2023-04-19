import DragControl from "@/components/DragControl";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-green-300 flex flex-col min-h-0">
      <div className="px-6">
        <h1 className="text-xl py-6">Hi, I&apos;m Giovanni Caiazzo</h1>
        <h2 className="text-sm">
          I am a React and React Native developer looking for exciting new
          opportunities to create unique and fun web and mobile apps
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <DragControl />
      </div>
    </main>
  );
}
