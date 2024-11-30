import { Calendar, Clock, MapPin } from 'lucide-react';
import { upcomingMatches } from '../../data/homeData';

const MatchesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase">UPCOMING MATCHES</h2>
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
  );
};

export default MatchesSection;