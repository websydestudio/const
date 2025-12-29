import { ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 px-4 sm:px-6 min-h-screen flex items-center bg-black/10 backdrop-blur-sm"
    >
      <div className="absolute bg-white opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1800px] mx-auto w-full">
        <div className="mb-8">
          <p className="font-onest font-medium text-lg text-orange-600 dark:text-orange-400 mb-4">
            Professional Construction Services
          </p>
        </div>

        <h1 className="font-urbanist font-bold text-[clamp(3rem,8vw,8rem)] leading-[0.9] text-gray-900 dark:text-white mb-8">
          Building Your
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Dream Home
          </span>
          <br />
          Into Reality
        </h1>

        <p className="font-onest text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-12 leading-relaxed">
          With over 15 years of experience in residential construction, we
          transform your vision into exceptional living spaces that stand the
          test of time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-onest font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
            Start Your Project
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-onest font-semibold text-lg hover:border-orange-500 hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-3">
            View Portfolio
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
