import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages";
import AboutmePage from "./pages/aboutme";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutmePage />} />
      </Routes>
    </Router>

  );
}

export default App;
