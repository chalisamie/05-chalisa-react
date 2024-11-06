import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-100 text-center py-8 text-black">
      <h1 className="text-3xl font-bold">Generation Thailand</h1>
      <h2 className="text-2xl mt-2">Home</h2>

      {/* เพิ่มปุ่มที่ด้านล่าง */}
      <div className="mt-8">
        <Link
          to="/user-home"
          className="px-6 py-2 bg-indigo-600 text-white rounded-md mr-4 hover:bg-indigo-500"
        >
          User Home Sector
        </Link>
        <Link
          to="/admin-home"
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
        >
          Admin Home Sector
        </Link>
      </div>
    </header>
  );
}

export default Header;
