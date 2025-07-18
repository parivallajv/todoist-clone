import {
  HeroSection,
  Testimonials,
  CaptureSection,
  TemplatesSection,
  AISection,
  StatsSection,
  FooterSection,
} from "./components";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Testimonials />
      <CaptureSection />
      <TemplatesSection />
      <AISection />
      <StatsSection />
      <FooterSection />
    </main>
  );
}
