"use client";
import React, { FormEvent, useState } from "react";

const ClassroomForm = () => {
  const [classroomName, setClassroomName] = useState<string>("");
  const [seatsCount, setSeatsCount] = useState<string>("");
  const [isAc, setIsAc] = useState<boolean>(false);

  const handleAddClassroom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newClassroom = {
      name: classroomName,
      seats: Number(seatsCount),
      ac: isAc,
    };
    // Reset form fields
    setClassroomName("");
    setSeatsCount("");
    setIsAc(false);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#0E46A3]">Add Classroom</h2>
      <form
        onSubmit={handleAddClassroom}
        className="bg-white p-6 rounded-lg shadow-md mb-6"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Classroom Name
          </label>
          <input
            type="text"
            value={classroomName}
            onChange={(e) => setClassroomName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
            placeholder="Enter classroom name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Seats Count
          </label>
          <input
            type="number"
            value={seatsCount}
            onChange={(e) => setSeatsCount(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
            placeholder="Enter number of seats"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Air Conditioning
          </label>
          <select
            value={isAc ? "ac" : "non-ac"}
            onChange={(e) => setIsAc(e.target.value === "ac")}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
          >
            <option value="non-ac">Non A/C</option>
            <option value="ac">A/C</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#0E46A3] text-white rounded-md hover:bg-[#094292] transition"
        >
          Add Classroom
        </button>
      </form>
    </div>
  );
};

export default ClassroomForm;
