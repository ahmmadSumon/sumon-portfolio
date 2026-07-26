export default function ProjectsSkeleton() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 pt-40">
      <div className="container mx-auto">
        {/* Filter buttons skeleton */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center xl:justify-start">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-24 h-9 rounded-full bg-white/10 animate-pulse" />
          ))}
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left details skeleton */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col gap-[30px] order-2 xl:order-none">
            <div className="w-24 h-16 bg-white/10 animate-pulse rounded" />
            <div className="w-48 h-10 bg-white/10 animate-pulse rounded" />
            <div className="w-72 h-9 bg-white/10 animate-pulse rounded" />
            <div className="w-full h-20 bg-white/10 animate-pulse rounded" />
            <div className="flex gap-3">
              <div className="w-16 h-6 bg-white/10 animate-pulse rounded" />
              <div className="w-16 h-6 bg-white/10 animate-pulse rounded" />
              <div className="w-16 h-6 bg-white/10 animate-pulse rounded" />
            </div>
            <div className="w-full h-px bg-white/20" />
            <div className="flex gap-4">
              <div className="w-[70px] h-[70px] rounded-full bg-white/10 animate-pulse" />
              <div className="w-[70px] h-[70px] rounded-full bg-white/10 animate-pulse" />
            </div>
          </div>

          {/* Right image skeleton */}
          <div className="w-full xl:w-[50%]">
            <div className="xl:h-[520px] mb-12">
              <div className="h-[460px] bg-white/10 animate-pulse rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
