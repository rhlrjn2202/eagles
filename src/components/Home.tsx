import { Trophy, Users, Calendar, ArrowRight, Star, Play, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [selectedProgram, setSelectedProgram] = useState<number>(0);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-20">
        {/* Video Background (fallback to image) */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/cricket-stadium.jpg")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Unleash Your
              <span className="block text-blue-400">Cricket Potential</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join the most prestigious cricket club that transforms passionate players into champions through professional coaching and world-class facilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center">
                  <Play className="w-5 h-5" />
                </div>
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive training programs designed for all skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedProgram === index ? 'md:col-span-2' : ''
                }`}
                onClick={() => setSelectedProgram(index)}
              >
                <div className="relative h-[400px]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-gray-300 mb-4">{program.description}</p>
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      Learn More <ChevronRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
              <p className="text-gray-600 mb-8">
                Eagles Cricket Club has established itself as a powerhouse in regional cricket, 
                with numerous accolades and achievements that speak to our commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://via.placeholder.com/300x400" alt="Achievement 1" className="rounded-lg w-full" />
                <img src="https://via.placeholder.com/300x200" alt="Achievement 2" className="rounded-lg w-full" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://via.placeholder.com/300x200" alt="Achievement 3" className="rounded-lg w-full" />
                <img src="https://via.placeholder.com/300x400" alt="Achievement 4" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-gray-600 text-lg">Capturing moments of excellence and team spirit</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={`https://via.placeholder.com/300x300?text=Gallery+${index + 1}`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const programs = [
  {
    title: "Junior Development",
    description: "Specialized training for young cricketers aged 8-15 years",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Professional Training",
    description: "Advanced coaching for serious cricketers aiming for professional careers",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Weekend Academy",
    description: "Flexible training programs for cricket enthusiasts",
    image: "https://via.placeholder.com/600x400",
  },
];

const achievements = [
  { value: "15+", label: "Championship Titles" },
  { value: "1000+", label: "Matches Played" },
  { value: "50+", label: "Professional Players" },
  { value: "25+", label: "Years of Excellence" },
];

export default Home;