import HeroSection from "../components/home/HeroSection";
import PhilosophySection from "../components/home/PhilosophySection";
import CommitmentSection from "../components/home/CommitmentSection";
import InvitationSection from "../components/home/InvitationSection";
import SocialMediaSection from "../components/home/SocialMediaSection";
import TeamSection from "../components/home/TeamSection";
import ServicesSection from "../components/home/ServicesSection";
import GallerySection from "../components/home/GallerySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <CommitmentSection />
      <InvitationSection />
      <SocialMediaSection />
      <TeamSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
