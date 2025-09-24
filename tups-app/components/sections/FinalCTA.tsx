'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../ui/CTAButton';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email capture
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-20 px-4 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold mb-6 text-gray-800">
            Ready to Transform Your Rhythm?
          </h2>
          <p className="text-xl mb-8 text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Download TUPS Pro today and experience professional rhythm training.
            Start your free trial and transform your musical timing.
          </p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-600"
                required
              />
              <CTAButton
                variant="secondary"
                size="md"
                className="whitespace-nowrap"
                onClick={() => {}}
              >
                Get Started
              </CTAButton>
            </form>
          ) : (
            <motion.div
              className="bg-success-500 text-white px-6 py-3 rounded-lg font-semibold"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              ✅ Thanks! Check your email for download instructions.
            </motion.div>
          )}
        </motion.div>

        {/* App Store Badges */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://apps.apple.com/tr/app/tups-pro/id6752381668"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-90 backdrop-blur-sm border border-gray-200 rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-opacity-100 transition-all cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">📱</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-600">Download on the</p>
              <p className="font-semibold text-gray-800">App Store</p>
            </div>
          </a>

          <div className="bg-white bg-opacity-60 backdrop-blur-sm border border-gray-300 rounded-lg px-6 py-3 flex items-center space-x-3 shadow-lg opacity-75">
            <div className="w-8 h-8 bg-gray-400 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">🤖</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500">Coming Soon</p>
              <p className="font-semibold text-gray-600">Google Play</p>
            </div>
          </div>
        </motion.div>

        {/* Trust elements */}
        <motion.div
          className="text-gray-700 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No spam, unsubscribe anytime
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Available Now
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Your data is safe
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}