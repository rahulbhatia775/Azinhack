import Image1 from "../assets/Docker.png";
import Image2 from "../assets/xyz-logo.png"; 
import Image3 from "../assets/clothing.jpg"; 
const sponsors = [
  { img: Image1, name: "Docker" },
  { img: Image2, name: ".xyz" },
  { img: Image3, name: "Clothing partner" },
];

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
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black shadow-bold-sm aspect-video flex items-center justify-center p-8 hover:scale-105 transition-transform"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-black mb-2">
                  {sponsor.name}
                </div>
                <img
                  src={sponsor.img}
                  alt={sponsor.name}
                  className="object-contain w-full h-full p-2"
                />
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default SponsorsSection;
