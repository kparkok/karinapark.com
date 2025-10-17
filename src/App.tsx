import { useState } from "react";
import { Container } from "react-bootstrap";
import Terminal from "./components/Terminal";
import Portfolio from "./components/Portfolio";

function App() {
  const [mode, setMode] = useState<"terminal" | "portfolio">("terminal");

  const toggleMode = () => {
    setMode(mode === "terminal" ? "portfolio" : "terminal");
  };

  return (
    <div className="app">
      <nav
        className="mode-toggle"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.9rem",
              fontWeight: "500",
              color: mode === "terminal" ? "#1076a1" : "#6c757d",
            }}
          >
            Terminal
          </span>

          <div
            onClick={toggleMode}
            style={{
              width: "60px",
              height: "30px",
              backgroundColor: mode === "portfolio" ? "#1076a1" : "#6c757d",
              borderRadius: "15px",
              position: "relative",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              style={{
                width: "26px",
                height: "26px",
                backgroundColor: "white",
                borderRadius: "50%",
                position: "absolute",
                top: "2px",
                left: mode === "portfolio" ? "32px" : "2px",
                transition: "left 0.3s ease",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          <span
            style={{
              fontSize: "0.9rem",
              fontWeight: "500",
              color: mode === "portfolio" ? "#1076a1" : "#6c757d",
            }}
          >
            Portfolio
          </span>
        </div>
      </nav>

      {mode === "terminal" ? (
        <Container fluid style={{ paddingTop: "70px" }}>
          <Terminal />
        </Container>
      ) : (
        <div style={{ paddingTop: "70px" }}>
          <Portfolio />
        </div>
      )}
    </div>
  );
}

export default App;
