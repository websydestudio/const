import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=450&fit=crop",
    title: "Modern Family Home",
    location: "Oakwood Estates",
    year: "2024",
    sqft: "3,200",
    beds: "4",
    baths: "3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=450&fit=crop",
    title: "Contemporary Villa",
    location: "Hillcrest",
    year: "2023",
    sqft: "4,500",
    beds: "5",
    baths: "4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=450&fit=crop",
    title: "Craftsman Style Home",
    location: "Riverside",
    year: "2023",
    sqft: "2,800",
    beds: "3",
    baths: "2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=450&fit=crop",
    title: "Luxury Estate",
    location: "Westfield",
    year: "2022",
    sqft: "6,000",
    beds: "6",
    baths: "5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=450&fit=crop",
    title: "Suburban Family Home",
    location: "Maplewood",
    year: "2022",
    sqft: "2,600",
    beds: "4",
    baths: "3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop",
    title: "Modern Townhouse",
    location: "Downtown",
    year: "2021",
    sqft: "1,800",
    beds: "3",
    baths: "2",
  },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 px-4 sm:px-6 bg-black/10 backdrop-blur-sm"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 dark:text-white">
            Our Recent Projects
          </h2>
          <div className="flex items-baseline gap-4">
            <div className="w-24 h-px bg-orange-500"></div>
            <span className="font-onest font-medium text-sm text-orange-600 dark:text-orange-400">
              Portfolio
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-onest font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto">
            View All Projects
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
