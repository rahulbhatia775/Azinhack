const TeamSection = () => {
  return (
    <section id="team" className="bg-cyan py-20 md:py-32 border-y-8 border-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black text-black mb-4 text-center">
          ORGANIZED BY
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-black text-white inline-block px-12 py-6 text-4xl md:text-6xl font-black border-4 border-black shadow-bold mb-8">
            IoSC EDC
          </div>
          
          <p className="text-xl md:text-2xl font-bold text-black max-w-2xl mx-auto">
            The Innovation Society EDC is a community of passionate students dedicated 
            to fostering innovation, entrepreneurship, and technical excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black shadow-bold-sm p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="w-32 h-32 bg-magenta border-4 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-4xl">👤</div>
              </div>
              <div className="text-xl font-black text-black">Team Member</div>
              <div className="text-sm font-bold text-black">Role</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
