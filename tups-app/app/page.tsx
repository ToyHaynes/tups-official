import Header from '@/components/sections/Header';
import ExerciseShowcase from '@/components/sections/ExerciseShowcase';
import HowItWorks from '@/components/sections/HowItWorks';
import TrustBadges from '@/components/sections/TrustBadges';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ExerciseShowcase />
        <HowItWorks />
        <TrustBadges />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}