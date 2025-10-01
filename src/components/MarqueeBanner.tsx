const MarqueeBanner = () => {
  return (
    <div className="bg-yellow border-y-4 border-black overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <a
            key={i}
            href="https://iosc-edc.club"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-8 text-2xl md:text-3xl font-black text-black hover:text-magenta transition-colors"
          >
            IOSC-EDC.CLUB | 
          </a>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
