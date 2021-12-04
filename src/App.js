import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("#141414");
  const [backgroundColor, setBackgroundColor] = useState("#f1f1f1");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setBackgroundColor("#f1f1f1");
      setColor("#141414");
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      setBackgroundColor("#141414");
      setColor("#f1f1f1");
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <div className="App" style={{ backgroundColor, color }}>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={<TextForm showAlert={showAlert} color={color} backgroundColor={backgroundColor} />}
            />
            <Route exact path="/about" element={<About  color={color} backgroundColor={backgroundColor}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
