import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-gaming font-bold mb-4 animated-gradient">
          404
        </div>
        <h1 className="text-4xl font-gaming font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. 
          It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/blog" className="btn-secondary">
            Browse Blog
          </Link>
        </div>
        
        {/* Gaming themed illustration */}
        <div className="mt-12 text-8xl animate-bounce">
          🎮
        </div>
      </div>
    </div>
  );
}

