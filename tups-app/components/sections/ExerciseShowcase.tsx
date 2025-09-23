'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { EXERCISES } from '@/lib/constants';
import VideoPlayer from '../ui/VideoPlayer';
import CTAButton from '../ui/CTAButton';
import MaterialIcon from '../ui/MaterialIcon';

export default function ExerciseShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="showcase" className="min-h-screen pt-20 pb-20 px-4 bg-gradient-to-br from-background via-primary-50 to-accent-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-500 rounded-full opacity-10"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-6 h-6 bg-accent-500 rounded-full opacity-10"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-heading font-black text-text mb-6 leading-tight">
            Every Pattern Has Hidden Potential
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Four progressive exercises that transform mechanical practice into rhythmic discovery.
            Build unshakeable pulse while exploring infinite possibilities.
          </p>

          <motion.div
            className="flex justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CTAButton
              href="#pricing"
              variant="primary"
              size="lg"
              className="shadow-xl hover:shadow-2xl"
            >
              Start Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <div className="flex justify-center mb-8">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {EXERCISES.map((exercise, index) => (
                <motion.button
                  key={exercise.id}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: activeTab === index ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2 flex items-center">
                    {index === 0 && <MaterialIcon icon="looks_one" size={20} />}
                    {index === 1 && <MaterialIcon icon="music_note" size={20} />}
                    {index === 2 && <MaterialIcon icon="grid_on" size={20} />}
                    {index === 3 && <MaterialIcon icon="science" size={20} />}
                  </span>
                  {exercise.name}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="mr-3 flex items-center">
                    {activeTab === 0 && <MaterialIcon icon="looks_one" size={32} className="text-primary-600" />}
                    {activeTab === 1 && <MaterialIcon icon="music_note" size={32} className="text-primary-600" />}
                    {activeTab === 2 && <MaterialIcon icon="grid_on" size={32} className="text-primary-600" />}
                    {activeTab === 3 && <MaterialIcon icon="science" size={32} className="text-primary-600" />}
                  </div>
                  <h3 className="text-3xl font-bold text-text">{EXERCISES[activeTab].name}</h3>
                </div>
                <p className="text-xl text-accent-600 font-semibold mb-6">
                  {EXERCISES[activeTab].tagline}
                </p>
                <ul className="space-y-4">
                  {EXERCISES[activeTab].benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <svg className="w-6 h-6 text-success-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8">
                  <motion.a
                    href={`/exercises/${EXERCISES[activeTab].id}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.a>
                </div>
              </div>

              <div>
                <VideoPlayer
                  src={EXERCISES[activeTab].videoUrl}
                  placeholder={`${EXERCISES[activeTab].name} Exercise Demo`}
                  autoplay={true}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {EXERCISES.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg overflow-hidden shadow-lg"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{exercise.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-text">{exercise.name}</h3>
                    <p className="text-sm text-accent-600 font-semibold">{exercise.tagline}</p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    activeTab === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {activeTab === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-6 bg-white">
                      <VideoPlayer
                        src={exercise.videoUrl}
                        placeholder={`${exercise.name} Exercise Demo`}
                        className="rounded-lg"
                      />
                      <ul className="space-y-3">
                        {exercise.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <a
                          href={`/exercises/${exercise.id}`}
                          className="inline-flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
                        >
                          Learn More
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA and info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm text-gray-600">
            No credit card required • 7-day free trial • Available on iOS & Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}