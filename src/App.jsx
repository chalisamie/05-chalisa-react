import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Owner from "./pages/Owner"
import Navbar from "./componants/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
