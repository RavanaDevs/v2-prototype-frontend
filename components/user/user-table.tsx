import React from "react";

const UserTable = () => {
  const users: { id: number; name: string; email: string; role: string }[] = [];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#0E46A3]">Users</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-[#0E46A3] text-white text-left">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">
                <button
                  //   onClick={() => handleEditClassroom(classroom.id)}
                  className="text-[#0E46A3] hover:text-[#094292] mr-2"
                >
                  Edit
                </button>
                <button
                  //   onClick={() => handleDeleteClassroom(classroom.id)}
                  className="text-red-500 hover:text-red-700"
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
};

export default UserTable;
