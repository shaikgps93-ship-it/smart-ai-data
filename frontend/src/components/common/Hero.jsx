export default function Hero() {
  return (
    <section className="min-h-[85vh] bg-slate-950 text-white flex items-center">
      <div className="mx-auto max-w-7xl px-6">
        <span className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
          🚀 AI Data Annotation Platform
        </span>

        <h1 className="mt-6 text-6xl font-bold leading-tight">
          Build Better AI
          <br />
          With Smarter Annotation
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-slate-400">
          Upload datasets, manage annotation teams, review quality,
          and export production-ready datasets from one platform.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700">
            Start Free
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 hover:bg-slate-900">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
}