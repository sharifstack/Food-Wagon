"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginUser } from "../../hooks/api";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const { mutate, isPending, error } = useLoginUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(
      {
        email: e.target.email.value,
        password: e.target.password.value,
      },
      {
        onSuccess: () => {
          router.push("/");
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-400 via-orange-400 to-orange-500 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-100 rounded-full opacity-40" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-100 rounded-full opacity-40" />

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-orange-500">
              foodwa<span className="text-yellow-400">Gon</span>
            </h1>
            <p className="text-gray-500 mt-2">
              Login to continue ordering delicious food
            </p>
          </div>

          {/* ✅ FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email" // ✅ important
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password" // ✅ important
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-orange-500"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-md disabled:opacity-60"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-center mt-4">{error.message}</p>
          )}

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?
            <Link
              href="/signup"
              className="text-orange-500 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
