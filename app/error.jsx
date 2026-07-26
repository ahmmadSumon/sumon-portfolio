"use client";

export default function Error({ error, reset }) {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-accent mb-4">Oops!</h1>
      <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
      <p className="text-white/60 max-w-md mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="bg-accent text-primary font-semibold px-6 py-3 rounded hover:opacity-90 transition-all"
      >
        Try Again
      </button>
    </section>
  );
}
