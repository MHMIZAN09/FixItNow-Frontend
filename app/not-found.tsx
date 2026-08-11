// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-6xl">🔧</div>

      <h1 className="mb-2 text-5xl font-bold text-gray-900">404</h1>
      <h2 className="mb-3 text-xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      <p className="mb-8 max-w-md text-gray-500">
        Looks like this page needs fixing! It doesn&apos;t exist or may have
        been moved.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 transition"
        >
          Go Home
        </Link>

        <Link
          href="/technicians"
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-gray-700 hover:bg-gray-50 transition"
        >
          Find Technicians
        </Link>
      </div>
    </div>
  );
}
