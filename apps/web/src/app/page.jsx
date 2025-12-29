import { Navigation } from "@/components/Navigation/Navigation";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { Footer } from "@/components/Footer/Footer";
import { BackgroundVideo } from "@/components/BackgroundVideo/BackgroundVideo";

export default function HomePage() {
  return (
    <div
      className="min-h-screen relative"
    >
      {/* Background Video */}
      <BackgroundVideo />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
        <Footer />

        {/* Global Styles for Animations and Effects */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&family=Onest:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');
        
        .font-urbanist {
          font-family: 'Urbanist', sans-serif;
        }
        
        .font-onest {
          font-family: 'Onest', sans-serif;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Parallax Effect */
        .parallax-bg {
          transform: translateY(var(--parallax-offset, 0));
          transition: transform 0.1s linear;
        }

        /* Fade in from bottom animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* Stagger animation delays */
        .animate-stagger-1 { animation-delay: 0.1s; }
        .animate-stagger-2 { animation-delay: 0.2s; }
        .animate-stagger-3 { animation-delay: 0.3s; }
        .animate-stagger-4 { animation-delay: 0.4s; }
        .animate-stagger-5 { animation-delay: 0.5s; }
        .animate-stagger-6 { animation-delay: 0.6s; }

        /* Floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Pulse glow effect */
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        /* Scale on scroll */
        .scale-on-scroll {
          transform: scale(var(--scale-factor, 1));
          transition: transform 0.3s ease-out;
        }

        /* Blur backdrop for navigation */
        .backdrop-blur-custom {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #f97316, #dc2626);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #ea580c, #b91c1c);
        }

        /* Intersection observer fade in */
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Enhanced hover effects */
        .enhanced-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .enhanced-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Gradient text animation */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-text {
          background: linear-gradient(-45deg, #f97316, #dc2626, #f97316, #ea580c);
          background-size: 400% 400%;
          animation: gradientShift 3s ease infinite;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Button glow effect */
        .button-glow {
          position: relative;
          overflow: hidden;
        }

        .button-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .button-glow:hover::before {
          left: 100%;
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .parallax-bg,
          .animate-fade-in-up,
          .animate-float,
          .animate-pulse-glow,
          .scale-on-scroll,
          .enhanced-hover,
          .animate-gradient-text {
            animation: none !important;
            transform: none !important;
            transition: none !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .parallax-bg {
            transform: none !important;
          }
        }
      `}</style>
      </div>
    </div>
  );
}
