import { Trophy, Award, Star, Medal } from 'lucide-react';

const Achievements = () => {
  const majorTrophies = [
    {
      id: 1,
      title: "City League Champions",
      year: "2023",
      description: "Dominated the season with 12 consecutive wins",
      icon: Trophy
    },
    {
      id: 2,
      title: "Regional Cup Winners",
      year: "2022",
      description: "Defeated 16 teams to claim the prestigious trophy",
      icon: Award
    },
    {
      id: 3,
      title: "Junior Development Award",
      year: "2023",
      description: "Recognized for excellence in youth cricket development",
      icon: Star
    }
  ];

  const records = [
    {
      title: "Highest Team Score",
      value: "287/4",
      match: "vs Thunder Kings, 2023"
    },
    {
      title: "Best Bowling Figures",
      value: "7/22",
      match: "vs Lions XI, 2023"
    },
    {
      title: "Longest Winning Streak",
      value: "12 matches",
      match: "2023 Season"
    }
  ];

  const yearlyAchievements = [
    {
      year: "2023",
      achievements: [
        "City League Champions",
        "Best Team of the Year Award",
        "3 Players in State Team"
      ]
    },
    {
      year: "2022",
      achievements: [
        "Regional Cup Winners",
        "Youth Development Excellence Award",
        "Runner-up in T20 Tournament"
      ]
    },
    {
      year: "2021",
      achievements: [
        "District Champions",
        "Best Cricket Academy Award",
        "Hosted National Youth Tournament"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A testament to our dedication, skill, and team spirit over the years.
        </p>
      </div>

      {/* Major Trophies */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Major Trophies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {majorTrophies.map((trophy) => (
            <div key={trophy.id} className="card p-6 text-center">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <trophy.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{trophy.title}</h3>
              <p className="text-blue-600 font-medium mb-2">{trophy.year}</p>
              <p className="text-gray-600">{trophy.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notable Records */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Notable Records</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {records.map((record, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-semibold mb-2">{record.title}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">{record.value}</p>
              <p className="text-sm text-gray-600">{record.match}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Year-wise Achievements */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Year-wise Achievements</h2>
        <div className="space-y-6">
          {yearlyAchievements.map((year, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center mb-4">
                <Medal className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">{year.year}</h3>
              </div>
              <ul className="space-y-2">
                {year.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;