import Navbar from "@/components/NavBar";
import Production from "@/components/Production";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-black h-screen flex justify-center items-center">
        <div className="text-2xl flex flex-col items-center gap-12">
          <iframe
            className="w-screen h-screen"
            src="https://www.youtube.com/embed/rgRxDPCPJ9E?autoplay=1&mute=1&enablejsapi=1"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
            allow="autoplay"
            autoplay="1"
            loop="1"
          />
        </div>
      </div>
      <Production />
    </main>
  );
}
