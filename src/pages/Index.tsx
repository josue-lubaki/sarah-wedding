import Navigation from '@/components/wedding/Navigation';
import HeroSection from '@/components/wedding/HeroSection';
import StorySection from '@/components/wedding/StorySection';
import EventSection from '@/components/wedding/EventSection';
import GallerySection from '@/components/wedding/GallerySection';
import Footer from '@/components/wedding/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StorySection />
      <EventSection />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default Index;
