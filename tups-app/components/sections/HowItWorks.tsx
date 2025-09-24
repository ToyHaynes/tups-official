'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    icon: '🎯',
    title: 'Start Where You Struggle',
    description: 'Pick any exercise based on today\'s challenge - timing, accents, or polyrhythms',
    details: 'Targeted practice from day one'
  },
  {
    icon: '🎨',
    title: 'Make It Yours',
    description: 'Mute notes, write melodies, layer patterns - sculpt exactly what you need',
    details: 'Interactive tools, infinite possibilities'
  },
  {
    icon: '🎵',
    title: 'Take Ideas to Your Instrument',
    description: 'Apply rhythmic discoveries to your kit, or practice on your knees anywhere',
    details: 'Every pattern becomes part of your vocabulary'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your rhythm in 15 minutes daily
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-primary-200 to-transparent z-0" />
              )}

              <div className="relative bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full flex flex-col">
                {/* Step number */}
                <div className="absolute -top-4 left-4 bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-700 mb-3">{step.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {step.description}
                </p>

                <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mt-auto">
                  {step.details}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-lg p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Ready to Start?</h3>
            <p className="text-gray-600 mb-6">Transform your rhythm practice today</p>
            <motion.a
              href="#newsletter"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl border border-gray-900"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}