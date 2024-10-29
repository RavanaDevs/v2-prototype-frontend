"use client";
import { useState } from "react";

export default function ReserveClassroom() {
  const [isRecurrent, setIsRecurrent] = useState(false);

  return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0E46A3]">
          Reserve Classroom
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Classroom Selection */}
            <div>
              <label
                htmlFor="classroom"
                className="block text-sm font-medium text-gray-700"
              >
                Select Classroom
              </label>
              <select
                id="classroom"
                name="classroom"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
              >
                <option value="">Select a classroom</option>
                <option value="room-101">Room 101</option>
                <option value="room-102">Room 102</option>
                <option value="room-103">Room 103</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Year Selection */}
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700"
              >
                Select Year
              </label>
              <select
                id="year"
                name="year"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
              >
                <option value="">Select year</option>
                <option value="1st-year">1st Year</option>
                <option value="2nd-year">2nd Year</option>
                <option value="3rd-year">3rd Year</option>
                <option value="4th-year">4th Year</option>
              </select>
            </div>

            {/* Subject Name */}
            <div>
              <label
                htmlFor="subjectName"
                className="block text-sm font-medium text-gray-700"
              >
                Subject Name
              </label>
              <input
                type="text"
                id="subjectName"
                name="subjectName"
                required
                placeholder="Enter subject name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
              />
            </div>

            {/* Course Code */}
            <div>
              <label
                htmlFor="courseCode"
                className="block text-sm font-medium text-gray-700"
              >
                Course Code
              </label>
              <input
                type="text"
                id="courseCode"
                name="courseCode"
                required
                placeholder="Enter course code"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
              />
            </div>

            {/* Date Selection */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Select Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
              />
            </div>

            {/* Start and End Time */}
            <div className="flex space-x-4">
              <div>
                <label
                  htmlFor="startTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Time
                </label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="endTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Time
                </label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
                />
              </div>
            </div>

            {/* Recurrent Checkbox */}
            <div className="col-span-2 flex items-center">
              <input
                type="checkbox"
                id="recurrent"
                name="recurrent"
                onChange={(e) => setIsRecurrent(e.target.checked)}
                className="h-4 w-4 text-[#0E46A3] border-gray-300 rounded focus:ring-[#0E46A3]"
              />
              <label htmlFor="recurrent" className="ml-2 text-gray-700">
                Schedule recurrently
              </label>
            </div>

            {/* End Date */}
            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                disabled={!isRecurrent}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
              />
            </div>

            {/* Lecturer Selection */}
            <div>
              <label
                htmlFor="lecturer"
                className="block text-sm font-medium text-gray-700"
              >
                Select Lecturer
              </label>
              <select
                id="lecturer"
                name="lecturer"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
              >
                <option value="">Select lecturer</option>
                <option value="dr-smith">Dr. Smith</option>
                <option value="dr-jones">Dr. Jones</option>
                <option value="prof-jackson">Prof. Jackson</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#0E46A3] text-white rounded-md hover:bg-[#094292] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E46A3] transition"
            >
              Reserve
            </button>
          </div>
        </form>
      </div>
  );
}
