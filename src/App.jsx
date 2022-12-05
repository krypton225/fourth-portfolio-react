import { Navbar, Landing, SocialMedia } from "./components/index";

function App() {
  return (
    <div className="app h-auto relative overflow-x-hidden">
      <Navbar />
      <SocialMedia />
      <Landing />
    </div>
  );
}

export default App;