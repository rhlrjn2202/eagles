import { useState } from 'react';
import { Star, Trophy, Users } from 'lucide-react';

type PlayerCategory = 'ALL' | 'BATTERS' | 'ALL-ROUNDERS' | 'BOWLERS';

interface Player {
  id: number;
  name: string;
  role: string;
  category: PlayerCategory;
  isCaptain?: boolean;
  number: string;
  nationality: string;
  image: string;
  stats: {
    matches: number;
    runs?: number;
    average?: number;
    strikeRate?: number;
    wickets?: number;
    economy?: number;
  };
  achievements: string[];
}

const Team = () => {
  const [activeCategory, setActiveCategory] = useState<PlayerCategory>('ALL');

  const players: Player[] = [
    // Captain
    {
      id: 1,
      name: "Ajeesh Mathew",
      role: "Right-hand Batsman",
      category: "BATTERS",
      isCaptain: true,
      number: "37",
      nationality: "England",
      image: "/images/team/ajeesh.jpg",
      stats: {
        matches: 150,
        runs: 5500,
        average: 48.5,
        strikeRate: 138.2
      },
      achievements: ["Captain since 2022", "Player of the Year 2023", "Most Runs 2022"]
    },
    // Bowlers
    {
      id: 2,
      name: "Sharu",
      role: "Right-arm Fast",
      category: "BOWLERS",
      number: "18",
      nationality: "Australia",
      image: "/images/team/sharu.jpg",
      stats: {
        matches: 95,
        wickets: 145,
        economy: 5.8
      },
      achievements: ["Most Wickets 2023", "Best Economy Rate 2022"]
    },
    {
      id: 3,
      name: "Renju",
      role: "Right-arm Fast",
      category: "BOWLERS",
      number: "12",
      nationality: "South Africa",
      image: "/images/team/renju.jpg",
      stats: {
        matches: 85,
        wickets: 120,
        economy: 6.2
      },
      achievements: ["Best Bowling Figures 2023"]
    },
    {
      id: 4,
      name: "Rahul Ji",
      role: "Right-arm Medium",
      category: "BOWLERS",
      number: "04",
      nationality: "Afghanistan",
      image: "/images/team/rahul.jpg",
      stats: {
        matches: 100,
        wickets: 160,
        economy: 5.9
      },
      achievements: ["Spinner of the Year 2023"]
    },
    {
      id: 5,
      name: "Prasad",
      role: "Off Spinner",
      category: "BOWLERS",
      number: "07",
      nationality: "Australia",
      image: "/images/team/prasad.jpg",
      stats: {
        matches: 90,
        wickets: 130,
        economy: 6.1
      },
      achievements: ["Most Maidens 2023"]
    },
    // Batters
    {
      id: 6,
      name: "Albin Das",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "03",
      nationality: "Australia",
      image: "/images/team/alby.jpg",
      stats: {
        matches: 120,
        runs: 4800,
        average: 45.5,
        strikeRate: 135.2
      },
      achievements: ["Highest Score 2023"]
    },
    {
      id: 7,
      name: "Pramod",
      role: "Left-hand Batsman",
      category: "BATTERS",
      number: "10",
      nationality: "New Zealand",
      image: "/images/team/pramod.jpg",
      stats: {
        matches: 110,
        runs: 4200,
        average: 42.8,
        strikeRate: 128.5
      },
      achievements: ["Most Consistent Player 2023"]
    },
    {
      id: 8,
      name: "Jithu",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "25",
      nationality: "Australia",
      image: "/images/team/jithu.jpg",
      stats: {
        matches: 125,
        runs: 4600,
        average: 44.2,
        strikeRate: 142.1
      },
      achievements: ["Fastest Century 2023"]
    },
    {
      id: 9,
      name: "Vishnu Vijayakumar",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "01",
      nationality: "England",
      image: "/images/team/vishnu.jpg",
      stats: {
        matches: 115,
        runs: 4100,
        average: 41.5,
        strikeRate: 132.8
      },
      achievements: ["Most Fifties 2023"]
    },
    {
      id: 10,
      name: "Vipin",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "7",
      nationality: "Pakistan",
      image: "/images/team/vipin.jpg",
      stats: {
        matches: 105,
        runs: 4300,
        average: 43.8,
        strikeRate: 134.5
      },
      achievements: ["Best Average 2023"]
    },
    {
      id: 11,
      name: "Anoop",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "333",
      nationality: "India",
      image: "/images/team/anoop.jpg",
      stats: {
        matches: 130,
        runs: 4900,
        average: 45.8,
        strikeRate: 138.5
      },
      achievements: ["Most Sixes 2023"]
    },
    {
      id: 12,
      name: "Micah",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "27",
      nationality: "New Zealand",
      image: "/images/team/micah.jpg",
      stats: {
        matches: 118,
        runs: 4400,
        average: 42.5,
        strikeRate: 133.2
      },
      achievements: ["Most Runs in Chases 2023"]
    },
    {
      id: 13,
      name: "Manoj RS",
      role: "Left-hand Batsman",
      category: "BATTERS",
      number: "4",
      nationality: "South Africa",
      image: "/images/team/manoj.jpg",
      stats: {
        matches: 112,
        runs: 4150,
        average: 41.2,
        strikeRate: 136.8
      },
      achievements: ["Best Wicketkeeper Batsman 2023"]
    },
    {
      id: 14,
      name: "Britto",
      role: "Left-hand Batsman",
      category: "BATTERS",
      number: "1",
      nationality: "South Africa",
      image: "/images/team/britto.jpg",
      stats: {
        matches: 112,
        runs: 4150,
        average: 41.2,
        strikeRate: 136.8
      },
      achievements: ["Best Wicketkeeper Batsman 2023"]
    },
    // All-Rounders
    {
      id: 14,
      name: "John Miller",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "01",
      nationality: "England",
      image: "/images/team/john_miller.jpg",
      stats: {
        matches: 110,
        runs: 3200,
        wickets: 95,
        average: 38.4,
        economy: 6.8
      },
      achievements: ["Best All-Rounder 2023"]
    },
    {
      id: 15,
      name: "Dipu",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "007",
      nationality: "Bangladesh",
      image: "/images/team/dipu.jpg",
      stats: {
        matches: 115,
        runs: 3400,
        wickets: 105,
        average: 36.5,
        economy: 6.5
      },
      achievements: ["Most Valuable Player 2023"]
    },
    {
      id: 16,
      name: "Sarath",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "6",
      nationality: "Australia",
      image: "/images/team/sarath.jpg",
      stats: {
        matches: 95,
        runs: 2800,
        wickets: 75,
        average: 34.2,
        economy: 7.1
      },
      achievements: ["Best Finishing Rate 2023"]
    },
    {
      id: 17,
      name: "Ajin",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "0",
      nationality: "India",
      image: "/images/team/ajin.jpg",
      stats: {
        matches: 100,
        runs: 2900,
        wickets: 85,
        average: 35.8,
        economy: 6.9
      },
      achievements: ["Most Match-winning Performances 2023"]
    },
    // New All-Rounders
    {
      id: 18,
      name: "Akash",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "12",
      nationality: "England",
      image: "/images/team/akash.jpg",
      stats: {
        matches: 105,
        runs: 3100,
        wickets: 90,
        average: 37.5,
        economy: 6.7
      },
      achievements: ["Best Bowling All-Rounder 2023"]
    },
    {
      id: 19,
      name: "Aneesh",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "143",
      nationality: "India",
      image: "/images/team/aneesh.jpg",
      stats: {
        matches: 120,
        runs: 3500,
        wickets: 110,
        average: 39.2,
        economy: 6.3
      },
      achievements: ["Best Fielding All-Rounder 2023"]
    },
    {
      id: 20,
      name: "Pradeep",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "2",
      nationality: "Australia",
      image: "/images/team/pradeep.jpg",
      stats: {
        matches: 110,
        runs: 3300,
        wickets: 85,
        average: 36.8,
        economy: 7.0
      },
      achievements: ["Most Explosive All-Rounder 2023"]
    }
  ];

  const categories: PlayerCategory[] = ['ALL', 'BATTERS', 'BOWLERS', 'ALL-ROUNDERS'];

  const filteredPlayers = activeCategory === 'ALL' 
    ? players 
    : players.filter(player => player.category === activeCategory);

  const captain = players.find(player => player.isCaptain);
  const allRounders = players.filter(player => player.category === 'ALL-ROUNDERS');
  const batters = players.filter(player => player.category === 'BATTERS' && !player.isCaptain);
  const bowlers = players.filter(player => player.category === 'BOWLERS');

  const PlayerCard = ({ player }: { player: Player }) => (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-300">
      {/* Player Image */}
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent h-24">
          <div className="p-4 sm:p-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl sm:text-2xl font-bold">{player.name}</h3>
              {player.isCaptain && (
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  CAPTAIN
                </span>
              )}
            </div>
            <p className="text-sm opacity-90">{player.role}</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 font-bold px-3 py-1 rounded">
          #{player.number}
        </div>
      </div>

      {/* Player Details */}
      <div className="p-4 sm:p-6">
        {/* Basic Info */}
        <div className="mb-4 pb-4 border-b border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Nationality</span>
            <span className="font-medium">{player.nationality}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Matches</span>
            <span className="font-medium">{player.stats.matches}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-4 pb-4 border-b border-gray-100">
          <h4 className="text-sm font-semibold mb-3">Career Stats</h4>
          <div className="grid grid-cols-2 gap-4">
            {player.stats.runs && (
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">{player.stats.runs}</p>
                <p className="text-xs text-gray-600">RUNS</p>
              </div>
            )}
            {player.stats.wickets && (
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">{player.stats.wickets}</p>
                <p className="text-xs text-gray-600">WICKETS</p>
              </div>
            )}
            {player.stats.average && (
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">{player.stats.average}</p>
                <p className="text-xs text-gray-600">AVERAGE</p>
              </div>
            )}
            {player.stats.economy && (
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">{player.stats.economy}</p>
                <p className="text-xs text-gray-600">ECONOMY</p>
              </div>
            )}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Achievements</h4>
          <div className="space-y-2">
            {player.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const TeamSection = ({ title, players, icon: Icon }: { title: string; players: Player[]; icon: any }) => (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="text-sm text-gray-500 ml-2">({players.length})</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {players.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Eagles Squad</h1>
          <p className="text-gray-600">Meet our champions who make victory possible</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto">
          <div className="inline-flex bg-white rounded-lg shadow p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap
                  ${activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600'}`}
              >
                {category.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {activeCategory === 'ALL' ? (
          <>
            {captain && (
              <TeamSection
                title="Captain"
                players={[captain]}
                icon={Star}
              />
            )}
            {batters.length > 0 && (
              <TeamSection
                title="Batters"
                players={batters}
                icon={Star}
              />
            )}
            {bowlers.length > 0 && (
              <TeamSection
                title="Bowlers"
                players={bowlers}
                icon={Trophy}
              />
            )}
            {allRounders.length > 0 && (
              <TeamSection
                title="All-Rounders"
                players={allRounders}
                icon={Users}
              />
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredPlayers.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;