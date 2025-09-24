'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { EXERCISES } from '@/lib/constants';
import CTAButton from '../ui/CTAButton';
import MaterialIcon from '../ui/MaterialIcon';

export default function ExerciseShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="showcase" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

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
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                    activeTab === index
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: activeTab === index ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">
                    {index === 0 && <MaterialIcon icon="looks_one" size={20} />}
                    {index === 1 && <MaterialIcon icon="music_note" size={20} />}
                    {index === 2 && <MaterialIcon icon="grid_on" size={20} />}
                    {index === 3 && <MaterialIcon icon="science" size={20} />}
                    {index === 4 && <MaterialIcon icon="schedule" size={20} />}
                  </span>
                  {exercise.name}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-center bg-white rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:order-1 lg:flex-1">
                <div className="flex items-center mb-4">
                  <span className="mr-3">
                    {activeTab === 0 && <MaterialIcon icon="looks_one" size={32} className="text-primary-600" />}
                    {activeTab === 1 && <MaterialIcon icon="music_note" size={32} className="text-primary-600" />}
                    {activeTab === 2 && <MaterialIcon icon="grid_on" size={32} className="text-primary-600" />}
                    {activeTab === 3 && <MaterialIcon icon="science" size={32} className="text-primary-600" />}
                    {activeTab === 4 && <MaterialIcon icon="schedule" size={32} className="text-primary-600" />}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-700">{EXERCISES[activeTab].name}</h3>
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
                      <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: benefit }}></span>
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

              <motion.div
                className="flex justify-center lg:justify-end"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={EXERCISES[activeTab].videoUrl}
                  alt={`${EXERCISES[activeTab].name} Exercise Demo`}
                  width={activeTab === 4 ? 380 : 280}
                  height={activeTab === 4 ? 280 : 395}
                  className={`w-auto h-auto ${activeTab === 4 ? 'max-w-[300px] lg:max-w-[380px]' : 'max-w-[240px] lg:max-w-[280px]'} rounded-xl shadow-2xl`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
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
                  <div className="w-8 mr-3 flex justify-center">
                    <MaterialIcon icon={exercise.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">{exercise.name}</h3>
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
                      <motion.div
                        className="flex justify-center"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Image
                          src={exercise.videoUrl}
                          alt={`${exercise.name} Exercise Demo`}
                          width={exercise.id === 'metronome' ? 380 : 280}
                          height={exercise.id === 'metronome' ? 280 : 395}
                          className={`w-auto h-auto ${exercise.id === 'metronome' ? 'max-w-[300px]' : 'max-w-[240px]'} rounded-xl shadow-2xl`}
                          sizes="100vw"
                        />
                      </motion.div>
                      <ul className="space-y-3">
                        {exercise.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: benefit }}></span>
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
          <CTAButton
            href="#newsletter"
            variant="primary"
            size="lg"
            className="mb-6"
          >
            Start Free Trial
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </CTAButton>
          <p className="text-sm text-gray-600">
            7-day free trial • Available on iOS & Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}