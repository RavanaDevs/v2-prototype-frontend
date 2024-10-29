import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
import Schedule from "@/components/schedule/schedule";

export default function Page() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 bg-[#F4F4F4]">
        <Navbar />

        {/* Main Section */}
        <main className="p-8">
          <Schedule />
        </main>
      </div>
    </div>
  );
}
