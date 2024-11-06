import UserForm from "../componants/UserForm"
import { useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const [viewUser, setViewUser] = useState(true)
  const [viewAdmin, setViewAdmin] = useState(true)

  function handleViewUser () {
    setViewUser(!viewUser)
    setViewAdmin(true)
    
  }

  function handleViewAdmin () {
    setViewAdmin(!viewAdmin)
    setViewUser(true)
    
  }

  return (
    <div className="flex-col justify-center items-center bg-white flex">
      <header className="text-center py-8 text-black">
        <h1 className="text-3xl font-bold">Generation Thailand</h1>
        <h2 className="text-2xl mt-2">Home</h2>

        {/* เพิ่มปุ่มที่ด้านล่าง */}
        <div className="mt-8">
          <button
            className="px-6 py-2 bg-indigo-600 text-white rounded-md mr-4 hover:bg-indigo-500"
            onClick={handleViewUser}
          >
            User Home Sector
          </button>
          <button
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
            onClick={handleViewAdmin}
          >
            Admin Home Sector
          </button>
        </div>
      </header>
      <UserForm users={users} setUsers={setUsers} viewUser={viewUser} viewAdmin={viewAdmin} />
    </div>
    
  );
}

export default Home;
