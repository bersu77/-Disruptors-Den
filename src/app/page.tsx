import { About } from "@/components/home-ui/about";
import Hero from "@/components/home-ui/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
    </main>
  );
}
