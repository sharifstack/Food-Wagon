import Link from "next/link";

export default function SignupForm() {
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
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition shadow-md"
        >
          Create Account
        </button>
      </form>

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
