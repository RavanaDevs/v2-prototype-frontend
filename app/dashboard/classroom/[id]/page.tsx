import ClassroomForm from "@/components/classroom/classroom-form";
import ClassroomTable from "@/components/classroom/classroom-table";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
import ClassroomReservationDetails from "@/components/schedule/schedule-info";

export default function Page() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 bg-[#F4F4F4]">
        <Navbar />

        {/* Main Section */}
        <main className="p-8">
          <div className="flex justify-center items-center"><ClassroomReservationDetails /></div>
        </main>
      </div>
    </div>
  );
}
