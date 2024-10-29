import React from "react";

const ClassroomTable = () => {
  const classrooms = [
    { id: 1, name: "Room A", seats: 30, ac: true },
    { id: 2, name: "Room B", seats: 25, ac: false },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#0E46A3]">Classroom List</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-[#0E46A3] text-white text-left">
            <th className="py-2 px-4 border-b">Classroom Name</th>
            <th className="py-2 px-4 border-b">Seats</th>
            <th className="py-2 px-4 border-b">A/C</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classrooms.map((classroom) => (
            <tr key={classroom.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{classroom.name}</td>
              <td className="py-2 px-4 border-b">{classroom.seats}</td>
              <td className="py-2 px-4 border-b">
                {classroom.ac ? "A/C" : "Non A/C"}
              </td>
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

export default ClassroomTable;
