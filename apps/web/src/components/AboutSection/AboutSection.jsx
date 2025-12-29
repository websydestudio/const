import { Award, Users, Calendar } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 bg-black/10 backdrop-blur-sm"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 dark:text-white">
            Meet the Builder
          </h2>
          <div className="flex items-baseline gap-4">
            <div className="w-24 h-px bg-orange-500"></div>
            <span className="font-onest font-medium text-sm text-orange-600 dark:text-orange-400">
              About Us
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
              <div className="mb-6">
                <h3 className="font-urbanist font-bold text-3xl mb-2">
                  Chandra Shekar
                </h3>
                <p className="font-onest text-lg opacity-90">
                  Licensed  Contractor
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Award size={20} />
                  <span className="font-onest">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={20} />
                  <span className="font-onest">40+ Homes Built</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} />
                  <span className="font-onest">Licensed Since 2018</span>
                </div>
              </div>

              <p className="font-onest text-sm opacity-80 leading-relaxed">
                "Every home tells a story. My passion is crafting spaces where
                families create lasting memories while ensuring the highest
                standards of quality and craftsmanship."
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="font-montserrat font-bold text-2xl text-gray-900 dark:text-white mb-4">
                Our Commitment to Excellence
              </h4>
              <p className="font-onest text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                At My Home Constructions, we believe that building a home is
                more than just construction—it's about creating a foundation for
                life's most important moments.
              </p>
              <p className="font-onest text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From initial design to final walkthrough, we work closely with
                our clients to ensure every detail reflects their vision while
                maintaining the highest standards of quality and safety.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h5 className="font-montserrat font-bold text-xl text-gray-900 dark:text-white mb-2">
                  Quality First
                </h5>
                <p className="font-onest text-sm text-gray-600 dark:text-gray-300">
                  Premium materials and expert craftsmanship in every project
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h5 className="font-montserrat font-bold text-xl text-gray-900 dark:text-white mb-2">
                  On Time
                </h5>
                <p className="font-onest text-sm text-gray-600 dark:text-gray-300">
                  Reliable scheduling and transparent communication throughout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
