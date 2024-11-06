import { useState } from "react";
import UserList from "./UserList";

function UserForm({ users, setUsers, viewUser, viewAdmin }) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    position: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() &&
      formData.lastName.trim() &&
      formData.position.trim()
    ) {
      const newInput = {
        id: Math.floor(Math.random() * 1000),
        name: formData.name,
        lastName: formData.lastName,
        position: formData.position,
      };
      setUsers([...users, newInput]);
      setFormData({ name: "", lastName: "", position: "" });
    }
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleClear = () => {
    setUsers([]);
  };

  return (
    <>
      <main>
        {!viewAdmin && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-md mt-10"
          >
            <h1 className="font-bold text-center">Create User Here</h1>
            <div className="mb-3">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                placeholder="Last Name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
                placeholder="Position"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-20 items-center ml-[380px] px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </form>
        )}
        
        {viewUser ? <UserList 
        users={users} 
        viewUser={viewUser} 
        viewAdmin={viewAdmin} 
        handleDelete={handleDelete}
        handleClear={handleClear} /> : null}

        {viewAdmin ? <UserList 
        users={users} 
        viewUser={viewUser} 
        viewAdmin={viewAdmin} 
        handleDelete={handleDelete}
        handleClear={handleClear} /> : null}
        


        
      </main>
    </>
  );
}

export default UserForm;
