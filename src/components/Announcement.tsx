import React from "react";

export default function Announcement() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-[#edf9fd] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              2025-10-01
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            deleniti sunt earum nulla excepturi eos.
          </p>
        </div>

        <div className="bg-[#f1f0ff] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              2025-10-01
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            deleniti sunt earum nulla excepturi eos.
          </p>
        </div>

        <div className="bg-[#fefce8] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              2025-10-01
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            deleniti sunt earum nulla excepturi eos.
          </p>
        </div>
      </div>
    </div>
  );
}
