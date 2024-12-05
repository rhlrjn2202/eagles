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
      name: "James Anderson",
      role: "Right-hand Batsman",
      category: "BATTERS",
      isCaptain: true,
      number: "45",
      nationality: "England",
      image: "/images/jersey-1.png",
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
      name: "Mitchell Starc",
      role: "Left-arm Fast",
      category: "BOWLERS",
      number: "56",
      nationality: "Australia",
      image: "https://via.placeholder.com/300",
      stats: {
        matches: 95,
        wickets: 145,
        economy: 5.8
      },
      achievements: ["Most Wickets 2023", "Best Economy Rate 2022"]
    },
    {
      id: 3,
      name: "Dale Turner",
      role: "Right-arm Fast",
      category: "BOWLERS",
      number: "90",
      nationality: "South Africa",
      image: "https://via.placeholder.com/300",
      stats: {
        matches: 85,
        wickets: 120,
        economy: 6.2
      },
      achievements: ["Best Bowling Figures 2023"]
    },
    {
      id: 4,
      name: "Rashid Khan",
      role: "Leg Spinner",
      category: "BOWLERS",
      number: "19",
      nationality: "Afghanistan",
      image: "https://via.placeholder.com/300",
      stats: {
        matches: 100,
        wickets: 160,
        economy: 5.9
      },
      achievements: ["Spinner of the Year 2023"]
    },
    {
      id: 5,
      name: "Nathan Lyon",
      role: "Off Spinner",
      category: "BOWLERS",
      number: "67",
      nationality: "Australia",
      image: "https://via.placeholder.com/300",
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
      name: "Steve Smith",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "49",
      nationality: "Australia",
      image: "https://via.placeholder.com/300",
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
      name: "Kane Williamson",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "22",
      nationality: "New Zealand",
      image: "https://via.placeholder.com/300",
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
      name: "David Warner",
      role: "Left-hand Batsman",
      category: "BATTERS",
      number: "31",
      nationality: "Australia",
      image: "https://via.placeholder.com/300",
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
      name: "Joe Root",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "66",
      nationality: "England",
      image: "https://via.placeholder.com/300",
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
      name: "Babar Azam",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "56",
      nationality: "Pakistan",
      image: "https://via.placeholder.com/300",
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
      name: "Rohit Sharma",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "45",
      nationality: "India",
      image: "https://via.placeholder.com/300",
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
      name: "Ross Taylor",
      role: "Right-hand Batsman",
      category: "BATTERS",
      number: "88",
      nationality: "New Zealand",
      image: "https://via.placeholder.com/300",
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
      name: "Quinton de Kock",
      role: "Left-hand Batsman",
      category: "BATTERS",
      number: "12",
      nationality: "South Africa",
      image: "https://via.placeholder.com/300",
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
      name: "Ben Stokes",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "55",
      nationality: "England",
      image: "https://via.placeholder.com/300",
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
      name: "Shakib Al Hasan",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "75",
      nationality: "Bangladesh",
      image: "https://via.placeholder.com/300",
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
      name: "Marcus Stoinis",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "23",
      nationality: "Australia",
      image: "https://via.placeholder.com/300",
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
      name: "Hardik Pandya",
      role: "All-Rounder",
      category: "ALL-ROUNDERS",
      number: "33",
      nationality: "India",
      image: "https://via.placeholder.com/300",
      stats: {
        matches: 100,
        runs: 2900,
        wickets: 85,
        average: 35.8,
        economy: 6.9
      },
      achievements: ["Most Match-winning Performances 2023"]
    }
  ];

  const categories: PlayerCategory[] = ['ALL', 'BATTERS', 'ALL-ROUNDERS', 'BOWLERS'];

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
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
            {bowlers.length > 0 && (
              <TeamSection
                title="Bowlers"
                players={bowlers}
                icon={Trophy}
              />
            )}
            {batters.length > 0 && (
              <TeamSection
                title="Batters"
                players={batters}
                icon={Star}
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