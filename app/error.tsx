// app/error.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-6xl">⚠️</div>

      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        Oops! Something went wrong
      </h1>

      <p className="mb-6 max-w-md text-gray-600">
        {error.message ||
          "We encountered an unexpected error. Please try again."}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 transition"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-gray-700 hover:bg-gray-50 transition"
        >
          Go Home
        </Link>
      </div>

      {process.env.NODE_ENV === "development" && error.digest && (
        <p className="mt-6 text-xs text-gray-400">Digest: {error.digest}</p>
      )}
    </div>
  );
}
