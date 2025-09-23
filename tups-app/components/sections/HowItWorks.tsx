'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    icon: '📱',
    title: 'Download',
    description: 'Get TUPS Pro from the App Store or Google Play. Start your free trial instantly.',
    details: 'Available on all devices'
  },
  {
    icon: '🎯',
    title: 'Practice',
    description: '15 minutes daily with our progressive exercises. Built-in metronome keeps you precise.',
    details: 'Professional MIDI timing'
  },
  {
    icon: '🏆',
    title: 'Master',
    description: 'Develop unshakeable timing and confidence. Track your progress as skills improve.',
    details: 'Measurable results'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-text mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your rhythm skills
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

              <div className="relative bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
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

                <h3 className="text-xl font-bold text-text mb-3">{step.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>

                <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
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
            <h3 className="text-2xl font-bold text-text mb-4">Ready to Start?</h3>
            <p className="text-gray-600 mb-6">Join thousands of musicians improving their rhythm skills</p>
            <motion.a
              href="#pricing"
              className="inline-flex items-center bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
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