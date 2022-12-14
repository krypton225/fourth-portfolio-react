import {
  Navbar,
  Landing,
  Branding,
  About,
  GoToTop,
  Skills,
  LastWork,
  Services,
  Testimonials,
  Contact,
  Footer
} from "./components/index";

function App() {
  return (
    <div className="app h-auto relative overflow-x-hidden selection:text-rich-black selection:bg-light-beige">
      <GoToTop />
      <Navbar />
      <Landing />
      <Branding />
      <About />
      <Skills />
      <LastWork />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;