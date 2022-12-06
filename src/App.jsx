import { Navbar, Landing, Branding, About } from "./components/index";

function App() {
  return (
    <div className="app h-auto relative overflow-x-hidden">
      <Navbar />
      <Landing />
      <Branding />
      <About />
    </div>
  );
}

export default App;