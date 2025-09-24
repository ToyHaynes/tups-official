'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">TUPS Pro</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional rhythm training for musicians. Master timing, develop unshakeable pulse.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#showcase" className="hover:text-accent-400 transition-colors">
                  Exercises
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-accent-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">Features (Coming Soon)</span>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/support.html" className="hover:text-accent-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/support.html" className="hover:text-accent-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">Community (Coming Soon)</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <span className="text-gray-500 cursor-not-allowed">Instagram (Coming Soon)</span>
              <span className="text-gray-500 cursor-not-allowed">YouTube (Coming Soon)</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
            <a href="/privacy-policy.html" className="hover:text-accent-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service.html" className="hover:text-accent-400 transition-colors">
              Terms of Service
            </a>
            <a href="/support.html" className="hover:text-accent-400 transition-colors">
              Support
            </a>
          </div>

          <div className="text-gray-500 text-center md:text-right">
            <p>&copy; 2025 Tups Pro. All rights reserved.</p>
            <p className="mt-1 text-xs">Made with love by Batuhan Toyhan.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}