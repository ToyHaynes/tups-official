'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

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
            <p className="text-accent-500 font-semibold text-sm mt-2">
              Launching {SITE_CONFIG.launchDate}
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
            <div className="flex space-x-4">
              <motion.a
                href={SITE_CONFIG.social.instagram}
                className="text-gray-400 hover:text-accent-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </motion.a>

              <motion.a
                href={SITE_CONFIG.social.youtube}
                className="text-gray-400 hover:text-accent-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>
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
            <p>&copy; 2024 TUPS Pro. All rights reserved.</p>
            <p className="mt-1 text-xs">Built for musicians, by musicians.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}