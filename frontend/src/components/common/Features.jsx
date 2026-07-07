import {
  FaImage,
  FaVideo,
  FaDatabase,
  FaRobot,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaImage size={40} />,
    title: "Image Annotation",
    description: "Bounding boxes, polygons, segmentation and keypoints.",
  },
  {
    icon: <FaVideo size={40} />,
    title: "Video Annotation",
    description: "Frame-by-frame object tracking for AI datasets.",
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Dataset Management",
    description: "Organize, version and export datasets easily.",
  },
  {
    icon: <FaRobot size={40} />,
    title: "AI Pre-labeling",
    description: "Accelerate annotation using AI-assisted labeling.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Team Collaboration",
    description: "Assign tasks and monitor annotator performance.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Analytics",
    description: "Track productivity and project progress in real time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Powerful tools for building enterprise AI datasets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="text-blue-500 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}