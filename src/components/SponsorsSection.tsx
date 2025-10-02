import Image1 from "../assets/Docker.png";
import Image2 from "../assets/xyz.png"; 
import Image3 from "../assets/clothing.png"; 
import Image4 from "../assets/keshav.png";
import Image5 from "../assets/ishacoffefinal.jpeg";
import Image6 from "../assets/monster.png";
import Image7 from "../assets/Unstop.jpg";

const sponsors = [
  { img: Image1 },
  { img: Image2 },
  { img: Image7 },
  //{ img: Image3 },
  { img: Image4 },
  //{ img: Image6 },
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

         <div className="flex justify-center mb-16">
          <div className="relative bg-white border-4 border-black shadow-bold-sm flex items-center justify-center p-6 hover:scale-105 transition-transform">
            <img
              src={mainSponsor.img}
              className="object-contain w-48 h-48 md:w-52 md:h-52"
              alt="Main Sponsor"
            />
            <span className="absolute top-2 text-black font-bold text-lg md:text-xl bg-white px-2 rounded">
              Title Sponsor
            </span>
          </div>
        </div>

        {/* Other Sponsors */}
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black shadow-bold-sm flex items-center justify-center p-4 hover:scale-105 transition-transform w-32 h-32 md:w-40 md:h-40"
            >
              <img
                src={sponsor.img}
                className="object-contain w-full h-full"
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
