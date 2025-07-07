import { Suspense } from 'react';
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import SEO from '@/components/SEO';
import { 
  LazyProjectsSection, 
  LazyTestimonialsSection, 
  LazyContactSection 
} from '@/components/LazyComponents';

// Loading fallback component
const SectionSkeleton = () => (
  <div className="min-h-screen bg-[#171717] animate-pulse">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="h-8 bg-gray-800 rounded mb-8 w-1/3"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-800 rounded w-3/4"></div>
        <div className="h-4 bg-gray-800 rounded w-1/2"></div>
        <div className="h-4 bg-gray-800 rounded w-2/3"></div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <SkillsSection />
      
      <Suspense fallback={<SectionSkeleton />}>
        <LazyProjectsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <LazyTestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <LazyContactSection />
      </Suspense>
    </>
  );
}
