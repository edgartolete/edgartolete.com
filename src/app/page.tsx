import { About } from "./components/about";
import { Header } from "./components/header";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Testimonials />
    </main>
  );
}
