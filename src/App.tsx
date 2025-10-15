import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Terminal from "./components/Terminal";
import Portfolio from "./components/Portfolio";

function App() {
  const [mode, setMode] = useState<"terminal" | "portfolio">("terminal");

  return (
    <div className="app">
      <nav className="mode-toggle">
        <Button
          variant={mode === "terminal" ? "success" : "outline-success"}
          onClick={() => setMode("terminal")}
        >
          Terminal Mode
        </Button>
        <Button
          variant={mode === "portfolio" ? "success" : "outline-success"}
          onClick={() => setMode("portfolio")}
        >
          Portfolio View
        </Button>
      </nav>

      {mode === "terminal" ? (
        <Container fluid>
          <Terminal />
        </Container>
      ) : (
        <Portfolio />
      )}
    </div>
  );
}

export default App;
