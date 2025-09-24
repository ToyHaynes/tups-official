'use client';

import Link from 'next/link';

export default function TupsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50 to-accent-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <span className="text-6xl mr-4">⚫</span>
            <h1 className="text-4xl md:text-6xl font-black text-text">TUPS</h1>
          </div>
          <p className="text-xl md:text-2xl text-accent-600 font-semibold mb-4">
            Develop Unshakeable Internal Pulse
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The foundational exercise for developing rock-solid timing through tuplet training.
            Master 2-12 tuplets systematically and build true pulse, not mechanical counting.
          </p>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold text-text mb-6 text-center">Exercise Demo</h2>
          <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-primary-700 font-medium">TUPS Demo Video</p>
              <p className="text-primary-600 text-sm mt-1">Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold text-text mb-6">What You&apos;ll Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-success-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-text mb-2">Systematic Tuplet Training</h3>
                <p className="text-gray-600 text-sm">Progressive exercises from duplets to 12-tuplets</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-success-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-text mb-2">Focused Practice</h3>
                <p className="text-gray-600 text-sm">Mute individual notes to isolate difficult patterns</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-success-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-text mb-2">Internal Pulse Development</h3>
                <p className="text-gray-600 text-sm">Build true pulse awareness beyond mechanical counting</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-success-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-text mb-2">Professional Precision</h3>
                <p className="text-gray-600 text-sm">MIDI-level accuracy for performance-ready timing</p>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold text-text mb-6">How TUPS Works</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-text mb-2">Select Your Tuplet</h3>
                <p className="text-gray-600">Choose from duplets (2) to 12-tuplets based on your skill level</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-text mb-2">Practice with Precision</h3>
                <p className="text-gray-600">Use the built-in metronome and MIDI engine for perfect timing feedback</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-text mb-2">Isolate & Focus</h3>
                <p className="text-gray-600">Mute specific notes to focus on the most challenging parts of the pattern</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-text mb-2">Build Muscle Memory</h3>
                <p className="text-gray-600">Gradually increase tempo while maintaining perfect subdivision accuracy</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-primary-500 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Master TUPS?</h2>
            <p className="mb-6 text-primary-100">Start your journey to unshakeable timing</p>
            <Link
              href="/#pricing"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/#showcase"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Exercises
          </Link>
        </div>
      </div>
    </div>
  );
}