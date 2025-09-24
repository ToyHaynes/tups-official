
import { motion } from 'framer-motion';
import Link from 'next/link';
import { EXERCISES } from '@/lib/constants';
import { notFound } from 'next/navigation';

interface ExercisePageProps {
  params: {
    id: string;
  };
}

export default function ExercisePage({ params }: ExercisePageProps) {
  const exercise = EXERCISES.find(ex => ex.id === params.id);

  if (!exercise) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50 to-accent-50">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Back Button */}
          <Link
            href="/#showcase"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-semibold"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Exercises
          </Link>

          {/* Content in Progress Card */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-16 shadow-2xl border border-white/50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="text-8xl mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              ⚙️
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Content Coming Soon
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Detailed training content for <strong>{exercise.name}</strong> is being prepared.
              <br/>For now, you can experience it in the app.
            </p>

            <motion.a
              href="https://apps.apple.com/tr/app/tups-pro/id6752381668"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Try in App
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Generate static params for all exercises
export function generateStaticParams() {
  return EXERCISES.map((exercise) => ({
    id: exercise.id,
  }));
}

// Generate metadata for each exercise page
export function generateMetadata({ params }: ExercisePageProps) {
  const exercise = EXERCISES.find(ex => ex.id === params.id);

  if (!exercise) {
    return {
      title: 'Exercise Not Found',
    };
  }

  return {
    title: `${exercise.name} - TUPS Pro`,
    description: `${exercise.tagline} - ${exercise.description}`,
  };
}