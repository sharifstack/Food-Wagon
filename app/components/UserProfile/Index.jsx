"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      router.push("/login");
      return;
    }

    setEmail(user.userEmail);
  }, [router]);

  const handleSave = (e) => {
    e.preventDefault();

    const updatedUser = {
      userEmail: email,
    };

    // update fake DB
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    localStorage.setItem("registeredUser", JSON.stringify(updatedUser));

    alert("Profile updated successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
