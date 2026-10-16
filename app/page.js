import Hero from '../components/Hero';
import SelectedProjects from '../components/SelectedProjects';
import ExperienceTimeline from '../components/ExperienceTimeline';
import TechnicalSkills from '../components/TechnicalSkills';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <SelectedProjects />
      <ExperienceTimeline />
      <TechnicalSkills />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
