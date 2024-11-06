import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componants/Home";
import UserHome from "./componants/UserHome";
import AdminHome from "./componants/AdminHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-home" element={<UserHome />} />

        <Route path="/admin-home" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
