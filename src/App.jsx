import { Navbar, Landing, Branding, About } from "./components/index";

function App() {
  return (
    <div className="app h-auto relative overflow-x-hidden selection:text-rich-black selection:bg-light-beige">
      <Navbar />
      <Landing />
      <Branding />
      <About />
    </div>
  );
}

export default App;