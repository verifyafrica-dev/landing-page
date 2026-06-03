import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CaseStudiesCTAProps {
  onRequestDemo: () => void;
}

export default function CaseStudiesCTA({ onRequestDemo }: CaseStudiesCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join hundreds of businesses across Africa that trust VerifyAfrica for their identity verification and compliance needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestDemo}
            className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            Request a Demo
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </button>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
