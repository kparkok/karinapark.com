import { useState } from "react";
import Portfolio from "./components/Portfolio";
function App() {
  const [mode, setMode] = useState<"terminal" | "portfolio">("terminal");

  return (
    <div className="app">
      <nav className="mode-toggle">
        <button
          onClick={() => setMode("terminal")}
          className={mode === "terminal" ? "active" : ""}
        >
          Terminal Mode
        </button>
        <button
          onClick={() => setMode("portfolio")}
          className={mode === "portfolio" ? "active" : ""}
        >
          Portfolio View
        </button>
      </nav>

      {mode === "terminal" ? (
        <div className="terminal-container">
          <h1>Terminal Mode</h1>
          <p>This is where your terminal interface will go!</p>
        </div>
      ) : (
        <div className="portfolio-container">
          <Portfolio />
        </div>
      )}
    </div>
  );
}

export default App;
