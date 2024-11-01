import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Mobilcek() {
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
    <section className="bg-zinc-800 py-16 bg-background rounded-3xl drop-shadow-2xl w-full">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Section */}
          <div className="shake-on-hover space-y-4 max-w-[700px] mx-auto md:mx-0">
            <p className="glow max-w-[700px] text-2xl sm:text-3xl text-black font-extralight mt-10 rounded-3xl p-2 shadow-2xl bg-[#D3D3D3]">
              Use Triptify anywhere, anytime. Want to visit a <span className="font-bold">new place</span>? Want to find the <span className="font-bold">best route</span>? Want to track <span className="font-bold">your trips</span>? Triptify can help you with that.
            </p>
          </div>

          {/* First Image Section */}
          <div className="relative flex items-center justify-center rounded-3xl mb-5" style={{ width: '90%', height: '350px', marginLeft: '6%' }}>
          <img
            src="/heger.png"
            className="w-full h-full object-cover rounded-lg sm:max-w-[80%] md:max-w-full"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>


          {/* Second Image Section */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/hrabos.png"
              className="object-contain w-full h-auto rounded-lg sm:max-w-[80%] md:max-w-full"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Second Text Section */}
          <div className="shake-on-hover space-y-4 max-w-[700px] mx-auto md:mx-0">
            <p className="glow max-w-[700px] text-2xl sm:text-3xl text-black font-extralight mt-10 rounded-3xl p-2 shadow-2xl bg-[#D3D3D3]">
            Plan your routes to the slightest details. Get information about <span className="font-bold">everything</span> you need during the trip. From the <span className="font-bold">tickets</span>, to <span className="font-bold">gas</span> station locations, live <span className="font-bold">family</span> tracking, and lots more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
