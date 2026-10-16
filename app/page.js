import Hero from '../components/Hero';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SelectedProjects from '../components/SelectedProjects';
import TechnicalSkills from '../components/TechnicalSkills';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <ScrollReveal delay={50}>
        <ExperienceTimeline />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <SelectedProjects />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <TechnicalSkills />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}
