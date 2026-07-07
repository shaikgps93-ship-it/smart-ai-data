import {
  FaUpload,
  FaTasks,
  FaCheckCircle,
  FaFileExport,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload size={36} />,
    title: "Upload Data",
    description: "Upload images, videos, text, or audio datasets securely.",
  },
  {
    icon: <FaTasks size={36} />,
    title: "Annotate",
    description: "Assign tasks to your team or use AI-assisted labeling.",
  },
  {
    icon: <FaCheckCircle size={36} />,
    title: "Quality Review",
    description: "Validate annotations with multi-level QA workflows.",
  },
  {
    icon: <FaFileExport size={36} />,
    title: "Export",
    description: "Export datasets in COCO, YOLO, Pascal VOC, JSON, and more.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            How It Works
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            From raw data to production-ready AI datasets in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 transition"
            >
              <div className="text-blue-500 flex justify-center mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {index + 1}. {step.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}