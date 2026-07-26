import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-extrabold text-accent mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-white/60 max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-accent text-primary font-semibold px-6 py-3 rounded hover:opacity-90 transition-all"
      >
        Back to Home
      </Link>
    </section>
  );
}
