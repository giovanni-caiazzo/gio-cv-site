import MainWithMenuLayout from "@/layouts/MainWithMenuLayout";

export default function About() {
  return (
    <MainWithMenuLayout title="About Me">
      <div className="space-y-6 text-sm">
        <h2 className="text-2xl py-2">I&apos;m Giovanni Caiazzo</h2>
        <p>
          I create web and mobile apps using mostly React and also implement the
          backend infrastructure to support it using mostly AWS cloud services.
          I&apos;m always open to learn new technologies and workflows and I do
          my best to create pixel-perfect frontends!
        </p>
        <p>
          Northern Italy is where I&apos;m based, but I am open to work remotely
          with any timezone, as long as there is a tiny overlap.
        </p>
        <p>
          My love for web development is only matched by my love for food. I
          love to cook and I love to eat, especially Italian and Japanese, but I
          appreciate every cuisine world wide!
        </p>
      </div>
    </MainWithMenuLayout>
  );
}
