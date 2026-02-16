import { Header } from "@/components/portfolio/Header";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ResearchSection } from "@/components/portfolio/ResearchSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Education } from "@/components/portfolio/Education";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <Education />
        <ResearchSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
