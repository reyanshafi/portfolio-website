import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
        <SkillsSection />

    <ProjectsSection />
    <TestimonialsSection />
    <ContactSection />
    </>
  );
}
