import { useState } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

function App() {
  const [mode, setMode] = useState<"terminal" | "portfolio">("portfolio");

  const toggleMode = () => {
    setMode(mode === "terminal" ? "portfolio" : "terminal");
  };

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
