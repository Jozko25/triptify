import Image from "next/image";

export default function Mobilcek() {
  return (
    <section className="bg-transparent py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Section */}
          <div className="space-y-4">
            <p className="text-muted-foreground max-w-[600px] text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
              Use Triptify anywhere, anytime. Want to visit a <span className="font-bold">new place</span>? Want to find the <span className="font-bold">best route</span>? Want to track <span className="font-bold">your trips</span>? Triptify can help you with that.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative flex items-center justify-center" style={{ width: '100%', height: '600px' }}> {/* Adjust height as needed */}
            <video
              src="/kraken.mp4"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // This will make sure the video fills the area
                borderRadius: '0.5rem' // Rounded corners
              }}
              autoPlay
              muted
              playsInline
            />
          </div>

          {/* Second Video Section */}
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              src="/kurva.mp4"
              width={1500}
              height={1000}
              className="object-contain w-full h-auto rounded-lg"
              style={{ maxWidth: '100%', height: 'auto', }}
              autoPlay
              muted
              playsInline
            />
          </div>

          {/* Second Text Section */}
          <p className="text-muted-foreground max-w-[600px] text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600">
            Plan your routes to the slightest <span className="font-bold">details</span>. Get information about everything you need during the <span className="font-bold">trip</span>. From the <span className="font-bold">tickets</span>, to gas station <span className="font-bold">locations</span>, live family <span className="font-bold">tracking</span>, and lots more.
          </p>
        </div>
      </div>
    </section>
  );
}
