import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const players = [
  {
    name: "Ajeesh Mathew",
    role: "Captain / Batsman",
    image: "/images/team/ajeesh.jpg",
    stats: "Avg: 45.5 | SR: 135.2",
  },
  {
    name: "John Miller ",
    role: "Fast Bowler",
    image: "/images/team/john_miller.jpg",
    stats: "Wickets: 85 | Eco: 6.2",
  },
  {
    name: "Rahul Ji",
    role: "All-rounder",
    image: "/images/team/rahul.jpg",
    stats: "Avg: 38.2 | Wickets: 45",
  },
  {
    name: "Albin Das",
    role: "Batsman",
    image: "/images/team/alby.jpg",
    stats: "Avg: 42.3 | SR: 128.5",
  },
  {
    name: "Jithu",
    role: "Batsman",
    image: "/images/team/jithu.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Dipu",
    role: "All-rounder",
    image: "/images/team/dipu.jpg",
    stats: "Avg: 38.2 | Wickets: 45",
  },
  {
    name: "Pramod",
    role: "Bowler",
    image: "/images/team/pramod.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Vipin",
    role: "Bowler",
    image: "/images/team/vipin.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Sarath",
    role: "Bowler",
    image: "/images/team/sarath.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Renju",
    role: "Batsman",
    image: "/images/team/renju.jpg",
    stats: "Avg: 42.3 | SR: 128.5",
  },
  {
    name: "Sharu",
    role: "Bowler",
    image: "/images/team/sharu.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Micah",
    role: "Bowler",
    image: "/images/team/micah.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Vishnu",
    role: "Bowler",
    image: "/images/team/vishnu.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Akash",
    role: "Bowler",
    image: "/images/team/akash.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Prasad",
    role: "Bowler",
    image: "/images/team/prasad.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Manoj",
    role: "Bowler",
    image: "/images/team/manoj.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Ajin",
    role: "Bowler",
    image: "/images/team/ajin.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Aneesh",
    role: "Bowler",
    image: "/images/team/aneesh.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Anoop",
    role: "Bowler",
    image: "/images/team/anoop.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Pradeep",
    role: "Bowler",
    image: "/images/team/pradeep.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
  {
    name: "Britto",
    role: "Bowler",
    image: "/images/team/britto.jpg",
    stats: "Wickets: 75 | Eco: 6.5",
  },
];

const PlayerGallery = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">OUR EAGLES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented players who make our team exceptional.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={12}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="player-gallery-swiper"
        >
          {players.map((player, index) => (
            <SwiperSlide key={index}>
              <div className="card overflow-hidden hover:-translate-y-1 transition-transform duration-200">
                <div className="relative">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-semibold text-white">{player.name}</h3>
                    <p className="text-blue-300 font-medium text-sm">{player.role}</p>
                    <p className="text-sm text-gray-200">{player.stats}</p>
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