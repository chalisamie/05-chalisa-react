import React from 'react'

function UserList({users, viewUser, viewAdmin, handleDelete, handleClear}) {
  return (
    <>
        <section>
          <div className="w-full flex justify-center mt-6">
            
              <table className="table-auto w-full max-w-3xl shadow-md rounded-lg">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Last Name</th>
                    <th className="border px-4 py-2">Position</th>
                    {viewUser && <th className="border px-4 py-2">Action</th>}
                  </tr>
                </thead>

                
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="border px-4 py-2 text-black">
                          {user.name}
                        </td>
                        <td className="border px-4 py-2 text-black">
                          {user.lastName}
                        </td>
                        <td className="border px-4 py-2 text-black">
                          {user.position}
                        </td>
                        {viewUser && (
                          <td className="border px-4 py-2 text-center">
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-400"
                            >
                              Delete
                            </button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                
              </table>
            
          </div>

          <div>
            {!viewAdmin && (
              <button
                className="mt-10 mb-20 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-400"
                onClick={handleClear}
              >
                Delete all
              </button>
            )}
          </div>
        </section>
      
    </>
  )
}

export default UserList
