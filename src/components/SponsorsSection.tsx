import Image1 from "../assets/Docker.png";
import Image2 from "../assets/xyz.png"; 
import Image3 from "../assets/clothing.png"; 
import Image4 from "../assets/keshav.png";
import Image5 from "../assets/ishacafe.jpg";

const sponsors = [
  { img: Image1 },
  { img: Image2 },
  { img: Image3 },
  { img: Image4 },
];

const mainSponsor = { img: Image5 };

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

        
        <div className="flex flex-col items-center mb-16">
          
          <div className="bg-white border-4 border-yellow-400 shadow-xl flex items-center justify-center p-8 hover:scale-110 transition-transform rounded-xl">
            <img
              src={mainSponsor.img}
              className="object-contain w-64 h-64"
              alt="Main Sponsor"
            />
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black shadow-bold-sm flex items-center justify-center p-6 hover:scale-105 transition-transform"
            >
              <img
                src={sponsor.img}
                className="object-contain w-40 h-40"
                alt={`Sponsor ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
