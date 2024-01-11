import Navbar from "@/components/NavBar";
import Production from "@/components/Production";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className=" h-screen flex justify-center items-center">
        <Production />
      </div>
    </main>
  );
}
