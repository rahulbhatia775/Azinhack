const SponsorsSection = () => {
  return (
    <section id="sponsors" className="bg-purple py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-xl md:text-2xl font-bold text-white mb-2">
            AZINHACK 2025 IS BROUGHT TO YOU BY
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-16">
            Our Sponsors
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black shadow-bold-sm aspect-video flex items-center justify-center p-8 hover:scale-105 transition-transform"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-black">SPONSOR</div>
                <div className="text-sm font-bold text-black">LOGO</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-xl font-bold text-white mb-6">
            Interested in sponsoring Azinhack 2025?
          </p>
          <a 
            href="mailto:sponsors@azinhack.com"
            className="inline-block bg-yellow text-black font-black text-xl px-8 py-4 border-4 border-black shadow-bold hover:bg-cyan hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            BECOME A SPONSOR
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
