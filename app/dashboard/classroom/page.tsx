import ClassroomForm from "@/components/classroom/classroom-form";
import ClassroomTable from "@/components/classroom/classroom-table";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";

export default function Page() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 bg-[#F4F4F4]">
        <Navbar />

        {/* Main Section */}
        <main className="p-8">
          <ClassroomForm />
          <ClassroomTable />
        </main>
      </div>
    </div>
  );
}
