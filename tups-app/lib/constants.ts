export const EXERCISES = [
  {
    id: 'tups',
    name: 'TUPS',
    tagline: 'Master the Space Between the Beats',
    benefits: [
      'Master <strong>2-12 tuplets</strong> systematically',
      'Create any pattern with <strong>one-tap note muting</strong>',
      'Build <strong>TRUE PULSE</strong>'
    ],
    videoUrl: '/images/tups-demo.png',
    icon: 'looks_one',
    description: 'The foundational exercise for developing rock-solid timing through tuplet training.'
  },
  {
    id: 'ar-plus',
    name: 'A&R+',
    tagline: 'Interactive Accents & Rebounds Training',
    benefits: [
      '<strong>Write any melody</strong> - practice what matters to you',
      'Apply <strong>accents and rebounds</strong> musically',
      'Free your hands - develop <strong>effortless flow</strong>'
    ],
    videoUrl: '/images/ar-demo.png',
    icon: 'music_note',
    description: 'Advanced accent and rest patterns that challenge your rhythmic precision.'
  },
  {
    id: 'pattern',
    name: 'PATTERN',
    tagline: 'Familiar Patterns, Infinite Possibilities',
    benefits: [
      '<strong>Start anywhere, end anywhere</strong> - discover how displacement transforms feel',
      'Apply to <strong>any tuplet</strong> - watch simple RLK become complex in 5s or 7s',
      'Master the math - know exactly where to start to <strong>land on Beat 1</strong>'
    ],
    videoUrl: '/images/pattern.demo.png',
    icon: 'grid_on',
    description: 'Build and practice custom rhythmic sequences tailored to your needs.'
  },
  {
    id: 'tup-lab',
    name: 'TUP LAB',
    tagline: 'Discover Rhythmic Harmonies',
    benefits: [
      'Layer tuplets like chords - kick in <strong>4s, ride in 7s, snare in 3s</strong>',
      'Create <strong>polymetric magic</strong> - play 5s, accent every 3rd note',
      'Discover <strong>grooves, not just math</strong> - polyrhythms that feel natural'
    ],
    videoUrl: '/images/tuplab-demo.png',
    icon: 'science',
    description: 'Push your limits with complex polyrhythmic exercises and independence training.'
  },
  {
    id: 'metronome',
    name: 'THE METRONOME',
    tagline: 'That Teaches Silence',
    benefits: [
      'Advanced <strong>silence training</strong> - pattern-based or <strong>random</strong> gaps build internal time',
      'Instant access - <strong>one-tap silence</strong> toggle, quick adjustments',
      'Save complete sessions - <strong>presets</strong> for BPM, T.S., sounds and silence'
    ],
    videoUrl: '/images/metronome-demo.png',
    icon: 'schedule',
    description: 'High-precision metronome built on professional MIDI engine for perfect timing.'
  }
];

export const PRICING_TIERS = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$3.99',
    period: '/month',
    features: [
      'All 4 exercises',
      'Weekly updates',
      'Email support',
      'Cancel anytime'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    id: '6-month',
    name: '6-Month',
    price: '$15.99',
    period: 'every 6 months',
    savings: 'Save 33%',
    features: [
      'All 4 exercises',
      'Weekly updates',
      'Priority email support',
      'Cancel anytime'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '$19.99',
    period: '/year',
    savings: 'Save 58%',
    features: [
      'All 4 exercises',
      'Weekly updates',
      'Priority email support',
      'Early access to new features',
      'Cancel anytime'
    ],
    cta: 'Start Free Trial',
    popular: true,
    badge: 'BEST VALUE'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'What exactly is TUPS Pro?',
    answer: 'TUPS Pro is an interactive rhythm training app with 4 specialized exercises. Unlike static books or basic metronomes, you can mute individual notes, write custom melodies, layer polyrhythms, and save unlimited presets. It\'s like having a complete rhythm laboratory in your pocket - where every pattern becomes an experiment.'
  },
  {
    question: 'Is it complicated to use?',
    answer: 'Not at all. Tap to mute notes. Tap to add accents. Tap to write melodies. No manual needed - everything is visual and immediate. Most users are creating patterns within 30 seconds of opening the app. If you can use Instagram, you can use TUPS Pro.'
  },
  {
    question: 'I\'m not a drummer. Is this for me?',
    answer: 'Absolutely. While drummers love it, TUPS Pro helps any musician develop internal pulse. Guitarists use it for odd meters, bassists for polyrhythmic grooves, pianists for independence. You don\'t even need an instrument - practice on your knees. The app shows you exactly what to do.'
  },
  {
    question: 'How is this different from a metronome?',
    answer: 'A metronome just clicks. TUPS Pro lets you see and sculpt rhythm. Mute individual notes in any tuplet, write melodies to practice, layer different subdivisions per drum. Plus our metronome has silence training - it disappears randomly or systematically to test your internal pulse.'
  },
  {
    question: 'Do I need to understand music theory?',
    answer: 'No theory required. TUPS Pro is visual and intuitive. See the beats as boxes, tap to change them, hear the results instantly. We explain tuplets in simple terms, and you learn by doing, not reading. Color coding makes everything clear.'
  },
  {
    question: 'What about the subscription?',
    answer: 'After your 7-day free trial: $3.99/month, $15.99/6-months, or $19.99/year. Cancel anytime through App Store or Google Play. Your saved presets remain yours even if you cancel. No tricks, no auto-billing surprises. One-tap subscription management.'
  },
  {
    question: 'Can I use it offline?',
    answer: 'Yes! Once downloaded, everything works offline. No internet needed for practice. Open and practice anywhere - plane, park, practice room. Sync happens automatically when you\'re back online.'
  }
];

export const SITE_CONFIG = {
  name: 'TUPS Pro',
  description: 'Master Rhythm in 15 Minutes Daily',
  url: 'https://tupstheapp.com',
  launchDate: 'October 2025',
  social: {
    instagram: 'https://instagram.com/tupspro',
    youtube: 'https://youtube.com/@tupspro'
  }
};