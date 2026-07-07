import {
  FaHospital,
  FaCar,
  FaShoppingCart,
  FaLeaf,
  FaShieldAlt,
  FaRobot,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaHospital size={40} />,
    title: "Healthcare",
    description: "Medical imaging and AI diagnostics.",
  },
  {
    icon: <FaCar size={40} />,
    title: "Automotive",
    description: "Autonomous driving datasets.",
  },
  {
    icon: <FaShoppingCart size={40} />,
    title: "Retail",
    description: "Product recognition and inventory AI.",
  },
  {
    icon: <FaLeaf size={40} />,
    title: "Agriculture",
    description: "Crop monitoring and precision farming.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Security",
    description: "Surveillance and public safety AI.",
  },
  {
    icon: <FaRobot size={40} />,
    title: "Robotics",
    description: "Training data for intelligent robots.",
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-12">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition"
            >
              <div className="text-blue-500 mb-5">{item.icon}</div>

              <h3 className="text-2xl text-white font-semibold">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}