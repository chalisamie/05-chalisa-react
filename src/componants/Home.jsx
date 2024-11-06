import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import UserForm from "./UserForm";
import UserList from "./UserList";

function Home() {
  const [users, setUsers] = useState([]);

  const handleUserSubmit = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleUserDelete = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div className="h-screen w-[2000px]  justify-center items-center bg-white flex flex-col">
      <Navbar />
      <Header />
      <div className="flex flex-grow justify-center items-center w-full p-4">
        <div className="w-full max-w-3xl">
          <UserForm onSubmit={handleUserSubmit} />
          <UserList users={users} onDelete={handleUserDelete} />
        </div>
      </div>
    </div>
  );
}

export default Home;
