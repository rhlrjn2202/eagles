import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const players = [
  {
    name: "John Smith",
    role: "Captain / Batsman",
    image: "https://via.placeholder.com/150",
    stats: "Avg: 45.5 | SR: 135.2",
  },
  {
    name: "Mike Johnson",
    role: "Fast Bowler",
    image: "https://via.placeholder.com/150",
    stats: "Wickets: 85 | Eco: 6.2",
  },
  {
    name: "David Wilson",
    role: "All-rounder",
    image: "https://via.placeholder.com/150",
    stats: "Avg: 38.2 | Wickets: 45",
  },
];

const PlayerGallery = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Eagles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented players who make our team exceptional.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="player-gallery-swiper"
        >
          {players.map((player, index) => (
            <SwiperSlide key={index}>
              <div className="card overflow-hidden hover:-translate-y-1 transition-transform duration-200">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{player.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-4">{player.role}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">{player.stats}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlayerGallery;