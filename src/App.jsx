import { Navbar, Landing, Branding, About, GoToTop, Skills, LastWork } from "./components/index";

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
    </div>
  );
}

export default App;