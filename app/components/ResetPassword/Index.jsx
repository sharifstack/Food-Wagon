import Link from "next/link";

export default function ResetPasswordForm() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 mx-auto my-[30vh]">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-orange-500">
          foodwa<span className="text-yellow-400">Gon</span>
        </h1>
        <p className="text-gray-500 mt-2">Reset your password securely</p>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition shadow-md"
        >
          Send Reset Link
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Remembered your password?{" "}
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
