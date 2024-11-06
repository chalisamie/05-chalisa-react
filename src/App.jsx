import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserHome from "./pages/UserHome"; // นำเข้า UserHome
import AdminHome from "./pages/AdminHome"; // นำเข้า AdminHome

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-home" element={<UserHome />} />{" "}
        {/* เพิ่มเส้นทาง UserHome */}
        <Route path="/admin-home" element={<AdminHome />} />{" "}
        {/* เพิ่มเส้นทาง AdminHome */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
