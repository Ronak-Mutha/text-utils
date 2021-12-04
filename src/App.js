import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
