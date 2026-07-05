import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-500 hover:text-blue-400"
        >
          AnnotaFlow AI
        </Link>

        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="rounded-lg border border-slate-700 px-4 py-2 text-white hover:bg-slate-800"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Start Free
          </Link>
        </div>
      </div>
    </nav>
  );
}