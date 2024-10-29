export default function ClassroomReservationDetails() {
  return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Header with classroom name and buttons */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#0E46A3]">Room 101</h2>
          <div>
            <button className="px-4 py-2 bg-[#0E46A3] text-white rounded-md hover:bg-[#094292] focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:ring-offset-2 mr-2">
              Edit
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
              Remove
            </button>
          </div>
        </div>

        {/* Reservation Details */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Classroom */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Classroom
              </label>
              <p className="p-3 bg-gray-100 rounded-md border border-gray-300">
                Room 101
              </p>
            </div>

            {/* Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <p className="p-3 bg-gray-100 rounded-md border border-gray-300">
                3rd Year
              </p>
            </div>

            {/* Subject Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject Name
              </label>
              <p className="p-3 bg-gray-100 rounded-md border border-gray-300">
                Advanced Calculus
              </p>
            </div>

            {/* Course Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Code
              </label>
              <p className="p-3 bg-gray-100 rounded-md border border-gray-300">
                MATH301
              </p>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <p className="p-3 bg-gray-100 rounded-md border border-gray-300">
                2024-11-05
              </p>
            </div>

            {/* Start and End Time */}
            <div className="flex space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Time
                </label>
                <p className="p-3 bg-gray-100 rounded-md border border-gray-300">
                  10:00 AM
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  End Time
                </label>
                <p className="p-3 bg-gray-100 rounded-md border border-gray-300">
                  12:00 PM
                </p>
              </div>
            </div>

            {/* Recurrent */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Recurrent
              </label>
              <p className="p-3 bg-gray-100 rounded-md border border-gray-300">
                Yes
              </p>
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <p className="p-3 bg-gray-100 rounded-md border border-gray-300">
                2024-12-05
              </p>
            </div>

            {/* Lecturer */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lecturer
              </label>
              <p className="p-3 bg-gray-100 rounded-md border border-gray-300">
                Dr. Smith
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
