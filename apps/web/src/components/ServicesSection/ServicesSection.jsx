import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: "🏠",
    title: "Custom Home Building",
    description:
      "Complete custom home construction from foundation to finish, tailored to your unique lifestyle and preferences.",
    features: [
      "Architectural design consultation",
      "Permit acquisition & management",
      "Quality material sourcing",
      "Project timeline management",
    ],
  },
  {
    icon: "🔨",
    title: "Home Renovations",
    description:
      "Transform your existing space with professional renovation services that enhance both functionality and aesthetics.",
    features: [
      "Kitchen & bathroom remodeling",
      "Room additions & extensions",
      "Structural modifications",
      "Interior/exterior upgrades",
    ],
  },
  {
    icon: "📋",
    title: "Project Management",
    description:
      "Comprehensive project oversight ensuring your construction stays on schedule, on budget, and up to standards.",
    features: [
      "Timeline planning & tracking",
      "Budget management & reporting",
      "Quality assurance inspections",
      "Vendor coordination",
    ],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 bg-black/10 backdrop-blur-sm"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 dark:text-white mb-4">
            Our Construction Services
          </h2>
          <p className="font-onest text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From ground breaking to final inspection, we provide comprehensive
            construction services to bring your vision to life
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
