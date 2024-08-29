
export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full h-full relative">
        <div className="absolute w-full h-full">
        <img src="/following.png" className="w-screen h-screen object-cover" />
        </div>
        <div className="absolute w-screen h-screen flex flex-col items-center justify-center text-center text-white text-4xl md:text-7xl tracking-wide uppercase"><div id="tagline">Coming soon</div></div>
      </div>
    </main>
  );
}
