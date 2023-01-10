import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={AboutMe} />
        <Route path="/resume" element={Resume} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
