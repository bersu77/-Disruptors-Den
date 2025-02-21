import { About } from "@/components/home-ui/about";
import Hero from "@/components/home-ui/hero";
import { Programs } from "@/components/home-ui/programs";
import { Stats } from "@/components/home-ui/stats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Stats />
    </main>
  );
}
