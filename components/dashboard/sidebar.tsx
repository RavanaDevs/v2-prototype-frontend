import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#0F0F0F] text-white flex flex-col p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <nav className="space-y-4">
        <Link href="/dashboard/classroom" className="block py-2 px-4 rounded-md hover:bg-[#0E46A3]">
          Classrooms
        </Link>
        <Link href="/dashboard/user" className="block py-2 px-4 rounded-md hover:bg-[#0E46A3]">
          Users
        </Link>
        <Link href="/dashboard/resource" className="block py-2 px-4 rounded-md hover:bg-[#0E46A3]">
          Resources
        </Link>
        <Link href="/dashboard/schedule" className="block py-2 px-4 rounded-md hover:bg-[#0E46A3]">
          Schedule
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
