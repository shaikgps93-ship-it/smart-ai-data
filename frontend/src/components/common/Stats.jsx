export default function Stats() {
  const stats = [
    {
      value: "10M+",
      title: "Images Processed",
      icon: "🖼️",
    },
    {
      value: "500+",
      title: "AI Data Experts",
      icon: "👥",
    },
    {
      value: "99.2%",
      title: "QA Accuracy",
      icon: "⭐",
    },
    {
      value: "24h",
      title: "Average Delivery",
      icon: "⚡",
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="text-5xl">{stat.icon}</div>

              <h2 className="text-4xl text-blue-500 font-bold mt-5">
                {stat.value}
              </h2>

              <p className="text-slate-400 mt-3">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}