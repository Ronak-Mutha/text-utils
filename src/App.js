import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <br />
      <Alert />
      <br />
      <TextForm />
      <br />
    </div>
  );
}

export default App;
