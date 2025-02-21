import { About } from "@/components/home-ui/about";
import Hero from "@/components/home-ui/hero";
import { Programs } from "@/components/home-ui/programs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Programs />
    </main>
  );
}
