"use client";

import Link from "next/link";
import { useRegisterUser } from "../../hooks/api";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const { mutate, isPending, isSuccess, error } = useRegisterUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    mutate(
      {
        email: e.target.email.value,
        password,
      },
      {
        onSuccess: () => {
          router.push("/login"); // ✅ redirect
        },
      }
    );
  };

  return (
    <div className="w-full mx-auto my-[20vh] max-w-md bg-white rounded-2xl shadow-2xl p-8">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-orange-500">
          foodwa<span className="text-yellow-400">Gon</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Create your account to start ordering
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition shadow-md disabled:opacity-60"
        >
          {isPending ? "Creating..." : "Create Account"}
        </button>
      </form>

      {/* Success message */}
      {isSuccess && (
        <p className="text-green-500 text-center mt-4">
          Account created successfully
        </p>
      )}

      {/* Error message */}
      {error && (
        <p className="text-red-500 text-center mt-4">
          {error.message || "Signup failed"}
        </p>
      )}

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-orange-500 font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
