import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Dashboard from "./assets/pages/Dashboard";
import Help from "./assets/pages/Help";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Help " element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
