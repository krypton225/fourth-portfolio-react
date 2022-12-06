import { Navbar, Landing, Branding } from "./components/index";

function App() {
  return (
    <div className="app h-auto relative overflow-x-hidden">
      <Navbar />
      <Landing />
      <Branding />
    </div>
  );
}

export default App;