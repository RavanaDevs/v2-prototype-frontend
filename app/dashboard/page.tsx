import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 bg-[#F4F4F4]">
        <Navbar />

        {/* Main Section */}
        <main className="p-8">
          <div className="border-4 border-dashed border-gray-300 p-16 text-center text-gray-500">
            Main content goes here
          </div>
        </main>
      </div>
    </div>
  );
}
