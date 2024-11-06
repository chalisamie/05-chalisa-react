import React from "react";

function UserList({ users, onDelete }) {
  return (
    <div className=" w-full flex justify-center mt-6">
      <table className="table-auto w-full max-w-3xl bg-gray-400 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Last Name</th>
            <th className="border px-4 py-2">Position</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-black">{user.name}</td>
              <td className="border px-4 py-2 text-black">{user.lastName}</td>
              <td className="border px-4 py-2 text-black">{user.position}</td>
              <td className="border px-4 py-2 text-black">
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
