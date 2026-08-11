// app/loading.tsx

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-3">
      <div className="relative">
        <div className="h-14 w-14 animate-spin rounded-full border-[3px] border-blue-100 border-t-blue-600"></div>
        <div className="absolute inset-0 flex items-center justify-center text-xl">
          🔧
        </div>
      </div>
      <p className="text-sm font-medium text-gray-500">Loading FixItNow...</p>
    </div>
  );
}
