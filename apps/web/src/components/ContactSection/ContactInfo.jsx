import { Phone, Mail, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
        <h3 className="font-montserrat font-bold text-2xl text-gray-900 dark:text-white mb-8">
          Get In Touch
        </h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-onest font-semibold text-lg text-gray-900 dark:text-white mb-1">
                Phone
              </h4>
              <p className="font-onest text-gray-600 dark:text-gray-300">
                (555) 123-4567
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-onest font-semibold text-lg text-gray-900 dark:text-white mb-1">
                Email
              </h4>
              <p className="font-onest text-gray-600 dark:text-gray-300">
                john@myhomeconstructions.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-onest font-semibold text-lg text-gray-900 dark:text-white mb-1">
                Location
              </h4>
              <p className="font-onest text-gray-600 dark:text-gray-300">
                123 Construction Ave
                <br />
                Building City, BC 12345
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-onest font-semibold text-lg text-gray-900 dark:text-white mb-4">
            Business Hours
          </h4>
          <div className="space-y-2 font-onest text-sm text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>7:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>8:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
