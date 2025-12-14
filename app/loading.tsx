export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 border-4 border-gaming-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xl font-gaming text-gray-400 loading-dots">
          Loading<span>.</span><span>.</span><span>.</span>
        </p>
      </div>
    </div>
  );
}

