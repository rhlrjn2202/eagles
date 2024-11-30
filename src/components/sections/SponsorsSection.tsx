import { sponsors } from '../../data/homeData';

const SponsorsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase">OUR SPONSORS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proud partners who support our journey in cricket.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;