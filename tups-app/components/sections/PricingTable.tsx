'use client';

import { motion } from 'framer-motion';
import { PRICING_TIERS } from '@/lib/constants';
import CTAButton from '../ui/CTAButton';

export default function PricingTable() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-text mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start with a free trial. Upgrade when you&apos;re ready to master rhythm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                tier.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: tier.popular ? 0 : -5 }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary-500 text-white text-center py-2 text-sm font-semibold">
                  {tier.badge}
                </div>
              )}

              <div className={`p-8 ${tier.popular ? 'pt-12' : ''}`}>
                {/* Plan name */}
                <h3 className="text-xl font-bold text-text mb-2">{tier.name}</h3>

                {/* Savings badge */}
                {tier.savings && (
                  <div className="inline-block bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {tier.savings}
                  </div>
                )}

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-text">{tier.price}</span>
                  <span className="text-gray-600 ml-1">{tier.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    >
                      <svg className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <CTAButton
                  variant={tier.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                  href="#newsletter"
                >
                  {tier.cta}
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-600 text-sm">
            All plans include a <span className="font-semibold">7-day free trial</span>.
            Cancel anytime from your app store account.
          </p>
          <div className="flex justify-center items-center mt-4 space-x-6 text-gray-400">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Secure payments
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Instant access
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}