import { ArrowRight, Play, ChevronRight, Trophy, Users, Calendar, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const programs = [
    {
      title: "Professional Training",
      description: "Get trained by international level coaches with personalized attention and structured development programs.",
      features: ["Expert Coaches", "Video Analysis", "Fitness Training"]
    },
    {
      title: "Junior Academy",
      description: "Start your cricket journey early with our specialized junior programs designed for ages 7-15.",
      features: ["Age-specific Training", "Basic Skills", "Fun Activities"]
    },
    {
      title: "Weekend Camps",
      description: "Intensive weekend training camps focusing on specific aspects of the game.",
      features: ["Batting Clinics", "Bowling Workshops", "Match Practice"]
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Junior Player",
      content: "The coaching here transformed my game completely. The attention to detail is amazing."
    },
    {
      name: "Sarah Williams",
      role: "Parent",
      content: "My son has grown so much in confidence since joining the Eagles junior program."
    },
    {
      name: "Michael Chen",
      role: "Senior Player",
      content: "The professional environment and world-class facilities make this club stand out."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/hero-cricket.jpg")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight [text-shadow:_0_1px_12px_rgb(0_0_0_/_40%)]">
              Unleash Your
              <span className="block text-blue-400">Cricket Potential</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 [text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)]">
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

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years of Excellence", icon: Trophy },
              { number: "500+", label: "Active Members", icon: Users },
              { number: "50+", label: "Annual Matches", icon: Calendar },
              { number: "12+", label: "Expert Coaches", icon: Clock },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our variety of specialized cricket programs designed to enhance your skills
              and take your game to the next level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="card p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Preview Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gallery Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Capturing memorable moments from our matches, training sessions, and celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { image: '/images/cricket-stadium.jpg', title: 'Championship Final' },
              { image: '/images/hero-cricket.jpg', title: 'Training Session' },
              { image: '/images/cricket-stadium.jpg', title: 'Team Celebration' },
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery" className="btn-secondary">
              View Full Gallery <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our members about their experience at Eagles Cricket Club.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Eagles Cricket Club?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards cricket excellence. Join our community of passionate cricketers.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;