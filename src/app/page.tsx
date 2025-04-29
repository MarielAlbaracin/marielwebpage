import Navbar from "./components/Navbar"; // Adjust path if needed
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-4 flex flex-col items-center justify-center gap-6 mt-10">
        <div className="relative w-32 h-32">
          <Image
            src="/asset/mariel.jpg" // replace with your actual file name
            alt="Profile picture of Mariel"
            fill
            className="rounded-full object-cover shadow-md"
            priority
          />
        </div>

        {/* Text Info */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Mariel M. Albaracin</h1>
          <p className="text-gray-600 text-lg mt-2">Front-End Developer</p>
          <p className="text-sm mt-1">Passionate about crafting elegant and responsive web interfaces.</p>
        </div>
      </main>
    </>
  );
}
