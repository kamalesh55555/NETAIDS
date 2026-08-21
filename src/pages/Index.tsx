import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/conference/Home/HeroSection";
import { AboutSection } from "@/components/conference/Home/AboutSection";
import { TracksSection } from "@/components/conference/Home/TracksSection";
import { ScheduleSection } from "@/components/conference/Home/ScheduleSection";
import { CommitteeSection } from "@/components/conference/Home/CommitteeSection";
import { CollaboratorsSection } from "@/components/conference/Home/CollaboratorsSection";
import { Footer } from "@/components/common/Footer";
import Contact from "@/components/conference/Contact/Contact";
import { FloatingRegisterButton } from "@/components/common/FloatingRegisterButton";

const Index = () => {
  return (
    <main className="overflow-x-hidden relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <ScheduleSection />
      <CommitteeSection />
      <CollaboratorsSection />
      <Contact />
      <Footer />
      <FloatingRegisterButton />
    </main>
  );
};

export default Index;
