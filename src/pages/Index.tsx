import Navigation from '@/components/wedding/Navigation';
import HeroSection from '@/components/wedding/HeroSection';
import StorySection from '@/components/wedding/StorySection';
import EventSection from '@/components/wedding/EventSection';
import InteracSection from '@/components/wedding/InteracSection';
import RSVPSection from '@/components/wedding/RSVPSection';
import GallerySection from '@/components/wedding/GallerySection';
import QRCodeSection from '@/components/wedding/QRCodeSection';
import Footer from '@/components/wedding/Footer';
import { checkIsVip } from '@/config/wedding';

const Index = () => {
  const isVip = checkIsVip();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StorySection />
      <EventSection />
      {!isVip && <InteracSection />}
      <RSVPSection />
      <GallerySection />
      {/* <QRCodeSection /> */}
      <Footer />
    </main>
  );
};

export default Index;
