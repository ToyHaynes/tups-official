'use client';

import { motion } from 'framer-motion';

const badges = [
  {
    icon: '⚡',
    title: 'Professional MIDI Engine',
    description: '<5ms latency for perfect timing',
    color: 'primary'
  },
  {
    icon: '🚫',
    title: 'No Credit Card Required',
    description: 'Start your free trial instantly',
    color: 'success'
  },
  {
    icon: '🔄',
    title: 'Cancel Anytime',
    description: 'Full control of your subscription',
    color: 'accent'
  },
  {
    icon: '📱',
    title: 'All Devices Supported',
    description: 'iOS, Android, sync across devices',
    color: 'primary'
  }
];

export default function TrustBadges() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
            Built for Musicians, by Musicians
          </h2>
          <p className="text-gray-600">
            Professional-grade tools you can trust
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div
                className="text-4xl mb-3"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {badge.icon}
              </motion.div>

              <h3 className="font-semibold text-text mb-2 text-sm">
                {badge.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {badge.description}
              </p>

              {/* Color accent line */}
              <motion.div
                className={`w-12 h-1 mx-auto mt-4 rounded-full ${
                  badge.color === 'primary' ? 'bg-primary-500' :
                  badge.color === 'success' ? 'bg-success-500' :
                  badge.color === 'accent' ? 'bg-accent-500' : 'bg-primary-500'
                }`}
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional trust elements */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center space-x-8 text-gray-500 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Secure & Private
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Regular Updates
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Email Support
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}