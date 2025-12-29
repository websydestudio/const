export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MHC</span>
            </div>
            <div className="font-montserrat font-bold text-2xl">
              MY HOME CONSTRUCTIONS
            </div>
          </div>

          <p className="font-onest text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Building dreams into reality with 15+ years of experience in
            residential construction. Your trusted partner for quality homes
            that stand the test of time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <a
              href="tel:+919700440234"
              className="font-onest text-gray-300 hover:text-white transition-colors duration-200"
            >
              9700440234
            </a>
            <a
              href="mailto:john@myhomeconstructions.com"
              className="font-onest text-gray-300 hover:text-white transition-colors duration-200"
            >
              john@myhomeconstructions.com
            </a>
            <span className="font-onest text-gray-300">
              Licensed Contractor #12345
            </span>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="font-onest text-sm text-gray-400">
              © 2024 My Home Constructions. All rights reserved. Licensed,
              Bonded & Insured.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
