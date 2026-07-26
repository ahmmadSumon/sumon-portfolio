export default function Loading() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-white/60">Loading...</p>
      </div>
    </section>
  );
}
