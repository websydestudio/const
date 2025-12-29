export function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
        <span className="text-white text-2xl">{icon}</span>
      </div>
      <h3 className="font-montserrat font-bold text-2xl text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="font-onest text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        {description}
      </p>
      <ul className="space-y-2 font-onest text-sm text-gray-600 dark:text-gray-300">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
}
