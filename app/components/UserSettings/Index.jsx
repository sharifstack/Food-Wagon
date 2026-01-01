"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-1/2 bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Settings</h2>

        <div className="space-y-3">
          <button
            className="w-full py-3 rounded-xl border hover:bg-gray-100"
            onClick={() => alert("Feature coming soon")}
          >
            Change Password
          </button>

          <button
            className="w-full py-3 rounded-xl border hover:bg-gray-100"
            onClick={() => alert("Feature coming soon")}
          >
            Notification Settings
          </button>

          <button
            className="w-full py-3 rounded-xl border text-red-500 hover:bg-red-50"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
