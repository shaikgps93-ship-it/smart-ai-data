export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for learning and small AI projects.",
      features: [
        "1 Project",
        "5,000 Images",
        "Basic Annotation",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹4,999/month",
      description: "Best for growing AI teams.",
      features: [
        "Unlimited Projects",
        "Unlimited Images",
        "AI Pre-Labeling",
        "QA Workflow",
        "Analytics Dashboard",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Built for enterprise AI organizations.",
      features: [
        "Unlimited Everything",
        "Dedicated Manager",
        "Custom Workflow",
        "API Integration",
        "Private Cloud",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Simple Pricing
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Choose a plan that fits your AI data annotation needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-8 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-4 text-4xl font-bold text-blue-500">
                {plan.price}
              </p>

              <p className="mt-4 text-slate-400">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-slate-300 flex items-center gap-2"
                  >
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}