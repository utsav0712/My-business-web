import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
// import Services from "../components/Services";
// import Testimonials from "../components/Testimonials";
// import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> 
        <Home />
        <About />
        <Products />
        {/* <Services />
        <Testimonials />
        <Pricing /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
