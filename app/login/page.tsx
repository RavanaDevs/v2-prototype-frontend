export default function Login() {
    return (
      <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#0E46A3]">Login</h2>
          
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E46A3] focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#0E46A3] text-white rounded-md hover:bg-[#094292] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E46A3] transition"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  