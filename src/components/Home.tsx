import { ArrowRight, Play, ChevronRight, Calendar, Clock, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PlayerGallery from './PlayerGallery';

const Home = () => {
  const upcomingMatches = [
    {
      date: "2024-03-20",
      team1: "Eagles CC",
      team2: "Lions XI",
      time: "2:00 PM",
      venue: "City Stadium"
    },
    {
      date: "2024-03-27",
      team1: "Eagles CC",
      team2: "Thunder Kings",
      time: "3:30 PM",
      venue: "Sports Complex"
    }
  ];

  const newsUpdates = [
    {
      date: "March 15, 2024",
      title: "Eagles CC Triumphs in Regional Championship",
      description: "Our team showcased exceptional performance winning the finals."
    },
    {
      date: "March 10, 2024",
      title: "Junior Training Program Launches",
      description: "New training program for aspiring cricketers aged 8-15 years."
    }
  ];

  const videos = [
    {
      title: "Season Highlights 2024",
      thumbnail: "/images/cricket-stadium.jpg",
      videoId: "abc123"
    },
    {
      title: "Junior Training Program",
      thumbnail: "/images/hero-cricket.jpg",
      videoId: "def456"
    },
    {
      title: "Team Building Session",
      thumbnail: "/images/cricket-stadium.jpg",
      videoId: "ghi789"
    },
    {
      title: "Match Winning Moments",
      thumbnail: "/images/hero-cricket.jpg",
      videoId: "jkl012"
    }
  ];

  const galleryImages = [
    { url: "/images/cricket-stadium.jpg", title: "Championship Victory" },
    { url: "/images/hero-cricket.jpg", title: "Team Practice" },
    { url: "/images/cricket-stadium.jpg", title: "Award Ceremony" },
    { url: "/images/hero-cricket.jpg", title: "Team Building" },
    { url: "/images/cricket-stadium.jpg", title: "Youth Training" },
    { url: "/images/hero-cricket.jpg", title: "Match Day" }
  ];

  const stats = [
    { value: "150+", label: "Active Members" },
    { value: "25", label: "Trophies Won" },
    { value: "12", label: "Years of Excellence" },
    { value: "50+", label: "Youth Players" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-cricket.jpg"
            alt="Cricket Ground"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to<br />Eagles Cricket Club
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Join us in our journey of cricket excellence. Develop your skills, compete at high levels, and be part of our winning legacy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/register" className="btn-primary">
              Join the Club
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center">
              Watch Video
              <Play className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                To be the leading cricket club that nurtures talent, promotes sportsmanship, and creates champions who inspire the next generation of cricketers.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Excellence</h3>
                  <p className="text-gray-600">Striving for the highest standards in cricket and personal development</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Community</h3>
                  <p className="text-gray-600">Building a strong cricket family that supports and uplifts each other</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Development</h3>
                  <p className="text-gray-600">Continuous learning and growth for players of all levels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Matches Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Matches</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Support our team in these upcoming fixtures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingMatches.map((match, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {match.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {match.time}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {match.team1} vs {match.team2}
                </h3>
                <p className="text-gray-600">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  {match.venue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Updates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest happenings at Eagles Cricket Club.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {newsUpdates.map((news, index) => (
              <div key={index} className="card p-6">
                <div className="text-sm text-gray-600 mb-3">{news.date}</div>
                <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <Link to="/news" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Read More
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Relive our memorable moments and experiences through these videos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div 
                key={index}
                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
                className="card overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all duration-200"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Image Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Capturing the spirit and excitement of Eagles Cricket Club.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-secondary">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Player Gallery Section */}
      <PlayerGallery />

      {/* Sponsors Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sponsors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proud partners who support our journey in cricket.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Sponsor 1</span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Sponsor 2</span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Sponsor 3</span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Sponsor 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Eagles Cricket Club?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of our cricket family and start your journey towards excellence.
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Register Now
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;