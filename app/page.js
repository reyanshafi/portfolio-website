import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SEO from '@/components/SEO';

import Image from "next/image";

export default function Home() {
  return (
    <>
    <SEO />
    <Hero />
        <SkillsSection />

    <ProjectsSection />
    <TestimonialsSection />
    <ContactSection />
    </>
  );
}
