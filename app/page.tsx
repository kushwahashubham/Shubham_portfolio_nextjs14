import { About, Footer, Testimonial, Header, Skills, Work } from "../container";
import { Navbar } from "../components/index";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
