import "./App.css";
import Home from "./Home";
import Sluis from "./Sluis";
import Vlam from "./Vlam";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sluis" element={<Sluis />} />
        <Route path="/vlam" element={<Vlam />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
