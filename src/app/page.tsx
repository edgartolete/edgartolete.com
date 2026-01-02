import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { Skills } from "./components/skills";
import { Stack } from "./components/stack";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Skills />
      <Stack />
      <About />
      <Experience />
      <Testimonials />
    </main>
  );
}
