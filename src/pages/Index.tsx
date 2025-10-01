import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import PrizesSection from "@/components/PrizesSection";
import SponsorsSection from "@/components/SponsorsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MarqueeBanner />
      <StatsSection />
      <AboutSection />
      <ScheduleSection />
      <PrizesSection />
      <SponsorsSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;
