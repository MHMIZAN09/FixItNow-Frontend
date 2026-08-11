export default function ServiceSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border bg-white">
      <div className="h-36 bg-gray-200" />

      <div className="space-y-4 p-6">
        <div className="h-6 w-2/3 rounded bg-gray-200" />

        <div className="h-4 w-full rounded bg-gray-200" />

        <div className="h-4 w-3/4 rounded bg-gray-200" />

        <div className="border-t pt-4">
          <div className="flex gap-3">
            <div className="h-11 w-11 rounded-full bg-gray-200" />

            <div className="flex-1 space-y-2">
              <div className="h-4 w-32 rounded bg-gray-200" />
              <div className="h-3 w-24 rounded bg-gray-200" />
            </div>
          </div>
        </div>

        <div className="h-10 rounded bg-gray-200" />
      </div>
    </div>
  );
}
