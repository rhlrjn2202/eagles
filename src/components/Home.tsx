import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import VisionSection from './sections/VisionSection';
import MatchesSection from './sections/MatchesSection';
import NewsSection from './sections/NewsSection';
import VideoGallerySection from './sections/VideoGallerySection';
import ImageGallerySection from './sections/ImageGallerySection';
import PlayerGallery from './PlayerGallery';
import SponsorsSection from './sections/SponsorsSection';
import CTASection from './sections/CTASection';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <VisionSection />
      <MatchesSection />
      <NewsSection />
      <VideoGallerySection />
      <ImageGallerySection />
      <PlayerGallery />
      <SponsorsSection />
      <CTASection />
    </div>
  );
};

export default Home;