import Landing from "./components/Landing/Landing";
import Down from "./components/down/Down";

export default function Home() {
  return (
    <div>
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>

      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            Nos Services
          </h1>
        </div>
      </section>
      <section className="relative z-40 min-h-screen bg-[#f5d142]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            Témoignages Clients
          </h1>
        </div>
      </section>
    </div>
  );
}
