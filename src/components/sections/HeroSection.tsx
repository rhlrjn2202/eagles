import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/hero-cricket.jpg"
          alt="Cricket Ground"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 w-full py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg uppercase">
          Welcome to<br />Eagles Cricket Club
        </h1>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl drop-shadow">
          Join us in our journey of cricket excellence. Develop your skills, compete at high levels, and be part of our winning legacy.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/register" className="btn-primary">
            Join the Club
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center backdrop-blur-sm transition-all duration-200">
            Watch Video
            <Play className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;