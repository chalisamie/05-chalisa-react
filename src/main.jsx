import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // สำหรับ CSS ที่มีการตั้งค่า Tailwind หรือ CSS อื่น ๆ

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
