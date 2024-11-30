const Team = () => {
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

  return (
    <div className="max-w-6xl mx-auto py-8 md:py-16 px-4">
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Team</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Meet our exceptional players who make Eagles Cricket Club a force to be reckoned with.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {players.map((player, index) => (
          <div key={index} className="card overflow-hidden hover:-translate-y-1">
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{player.name}</h3>
              <p className="text-blue-600 font-medium text-xs md:text-sm mb-3 md:mb-4">{player.role}</p>
              <div className="pt-3 md:pt-4 border-t border-gray-100">
                <p className="text-xs md:text-sm text-gray-600">{player.stats}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;