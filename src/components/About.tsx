import { Trophy, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/cricket-stadium.jpg"
            alt="Cricket Stadium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A legacy of cricket excellence since 2012
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for perfection in every match, every practice, and every moment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unity</h3>
              <p className="text-gray-600">
                Building strong bonds that transcend the boundaries of the field.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedication</h3>
              <p className="text-gray-600">
                Committed to the growth and development of cricket in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-8 text-gray-700 leading-relaxed">
              Eagles Cricket Club was born from a shared dream in 2012 when a group of passionate
              cricket enthusiasts came together with a vision to create more than just a sports team.
              What started as weekend practice sessions in a local park has grown into one of the
              region's most respected cricket institutions.
            </p>

            <div className="my-12 relative">
              <img
                src="/images/hero-cricket.jpg"
                alt="Early days of Eagles Cricket Club"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 text-center mt-4 italic">
                Our first team practice session, 2012
              </p>
            </div>

            <p className="mb-8 text-gray-700 leading-relaxed">
              The early years were characterized by determination and growth. Our founding members
              invested countless hours in training young talents and building a strong foundation
              for the club. By 2015, we had established our first youth development program,
              marking the beginning of our commitment to nurturing the next generation of cricketers.
            </p>

            {/* Jersey Showcase */}
            <div className="my-16 text-center">
              <h3 className="text-2xl font-semibold mb-6">Our Team Colors</h3>
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="/images/cricket-stadium.jpg"
                  alt="Eagles Cricket Club Jersey"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <p className="text-gray-600 mt-4 italic">
                Our iconic blue and gold jersey, representing excellence and tradition
              </p>
            </div>

            <p className="mb-8 text-gray-700 leading-relaxed">
              The turning point came in 2018 when our senior team clinched their first major
              trophy in the Regional Championship. This victory not only put Eagles Cricket Club
              on the map but also validated our approach to cricket development and team building.
              Since then, we've continued to grow, adding more programs and expanding our facilities.
            </p>

            <div className="my-12 grid grid-cols-2 gap-4">
              <img
                src="/images/cricket-stadium.jpg"
                alt="Training session"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img
                src="/images/hero-cricket.jpg"
                alt="Championship celebration"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>

            <p className="mb-8 text-gray-700 leading-relaxed">
              Today, Eagles Cricket Club stands as a testament to what can be achieved through
              dedication, unity, and a relentless pursuit of excellence. Our club has become
              a second home for hundreds of cricket enthusiasts, from junior players taking
              their first steps in the sport to seasoned professionals leading by example.
            </p>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Young Players Trained</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
              <p className="text-gray-600">Major Trophies Won</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Professional Players Produced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Looking Forward</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            As we move forward, Eagles Cricket Club remains committed to its founding principles
            while embracing new challenges and opportunities. Our vision is to become the premier
            cricket institution in the region, setting new standards in player development and
            sporting excellence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;