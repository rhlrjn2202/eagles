const Matches = () => {
  const matches = [
    {
      date: "2024-03-15",
      opponent: "Hawks CC",
      venue: "City Stadium",
      result: "Won by 5 wickets",
      type: "League Match",
      isWin: true,
    },
    {
      date: "2024-03-08",
      opponent: "Lions XI",
      venue: "Sports Complex",
      result: "Lost by 20 runs",
      type: "Friendly",
      isWin: false,
    },
    {
      date: "2024-03-01",
      opponent: "Thunder CC",
      venue: "Central Ground",
      result: "Won by 45 runs",
      type: "League Match",
      isWin: true,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 md:py-16 px-4">
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Recent Matches</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Track our performance and journey through recent games.
        </p>
      </div>
      <div className="space-y-4 md:space-y-6">
        {matches.map((match, index) => (
          <div key={index} className="card p-4 md:p-6 hover:shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-2 md:mb-3">
                  <p className="text-xs md:text-sm text-gray-500">{match.date}</p>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs md:text-sm font-medium">
                    {match.type}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Eagles vs {match.opponent}</h3>
                <p className="text-sm md:text-base text-gray-600">{match.venue}</p>
              </div>
              <div className="mt-3 md:mt-0 md:ml-8">
                <p className={`text-sm md:text-base font-medium ${
                  match.isWin ? 'text-green-600' : 'text-red-600'
                }`}>
                  {match.result}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;