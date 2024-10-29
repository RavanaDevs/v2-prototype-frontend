import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
import UserForm from "@/components/user/user-form";
import UserTable from "@/components/user/user-table";

export default function Page() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 bg-[#F4F4F4]">
        <Navbar />

        {/* Main Section */}
        <main className="p-8">
          <UserForm/>
          <UserTable/>
        </main>
      </div>
    </div>
  );
}
