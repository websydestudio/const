import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 bg-black/10 backdrop-blur-sm"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 dark:text-white mb-4">
            Ready to Start Building?
          </h2>
          <p className="font-onest text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss your project and turn your vision into reality.
            Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
