import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import WhyTIS from "./components/WhyTIS";
import Campus from "./components/Campus";
import Admissions from "./components/Admissions";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <WhyTIS />
        <Campus />
        <Admissions />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;