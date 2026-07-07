export default function FAQ() {
  const faqs = [
    {
      question: "What services does Smart AI Data provide?",
      answer:
        "AI data annotation, data collection, quality assurance, and dataset management.",
    },
    {
      question: "Which annotation formats are supported?",
      answer:
        "COCO, YOLO, Pascal VOC, JSON, CSV and other industry-standard formats.",
    },
    {
      question: "Do you provide AI-assisted labeling?",
      answer:
        "Yes. AI pre-labeling is available for Professional and Enterprise plans.",
    },
    {
      question: "Is enterprise support available?",
      answer:
        "Yes. We provide dedicated support, SLA agreements and custom integrations.",
    },
    {
      question: "Can I export my datasets?",
      answer:
        "Yes. Export your datasets in multiple industry-standard formats.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {faq.question}
              </h3>

              <p className="text-slate-300 mt-3">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}