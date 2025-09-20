import NetworkCanvas from "../components/NetworkCanvas";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[#0f111a] text-white">
      <h1 className="text-4xl font-mono mb-4">Hi, I'm Busy Works</h1>
      <p className="text-xl font-mono mb-8">
        Aspiring Network Engineer | CCNA Journey in Progress
      </p>
      <NetworkCanvas />
    </div>
  );
}
