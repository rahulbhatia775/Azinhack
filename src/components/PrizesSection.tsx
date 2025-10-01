const PrizesSection = () => {
  const prizes = [
    {
      title: "1ST PLACE",
      amount: "$5,000",
      bg: "bg-yellow",
      description: "Top prize for the best overall project",
    },
    {
      title: "2ND PLACE",
      amount: "$3,000",
      bg: "bg-cyan",
      description: "Runner-up for outstanding innovation",
    },
    {
      title: "3RD PLACE",
      amount: "$2,000",
      bg: "bg-magenta",
      description: "Third place for exceptional work",
    },
    {
      title: "BEST UI/UX",
      amount: "$1,000",
      bg: "bg-lime",
      description: "Best design and user experience",
    },
    {
      title: "BEST AI/ML",
      amount: "$1,000",
      bg: "bg-purple",
      description: "Most innovative use of AI/ML",
    },
    {
      title: "SOCIAL IMPACT",
      amount: "$1,000",
      bg: "bg-cyan",
      description: "Best project for social good",
    },
  ];

  return (
    <section id="prizes" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black text-black mb-4 text-center">
          PRIZES
        </h2>
        <p className="text-2xl font-bold text-black text-center mb-16">
          Over $10,000 in prizes to be won!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`${prize.bg} border-4 border-black shadow-bold p-8 hover:scale-105 transition-transform`}
            >
              <div className="text-3xl font-black text-black mb-4">
                {prize.title}
              </div>
              <div className="text-5xl md:text-6xl font-black text-black mb-4">
                {prize.amount}
              </div>
              <div className="text-lg font-bold text-black">
                {prize.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
