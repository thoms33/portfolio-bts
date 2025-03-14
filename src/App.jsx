import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import TechWatch from "./components/TechWatch";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/veille" element={<TechWatch />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
