import Link from "next/link";
import { useEffect, useRef } from "react";
import ChatComponent from "./chat";

export default function Mobilcek2() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideos = async () => {
      try {
        if (videoRef1.current) await videoRef1.current.play();
        if (videoRef2.current) await videoRef2.current.play();
      } catch (error) {
        console.log("Error playing videos automatically:", error);
      }
    };
    playVideos();
  }, []);

  return (
    <section className="bg-transparent py-16 bg-zinc-800 rounded-3xl drop-shadow-2xl w-full">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Section */}
          <div className="space-y-4 max-w-[700px] mx-auto md:mx-0">
            <h1 className="text-4xl text-white bg-black rounded-3xl p-3 hover:scale-105 transition">
              Talk to our <span className="font-bold">AI</span> assistant.
            </h1>
          </div>

          {/* Chat Component Section */}
          <div className="relative w-full h-full flex items-center justify-center">
            <ChatComponent/> {/* Ensuring the chat component is responsive */}
          </div>
        </div>
      </div>
    </section>
  );
}
