import utkarsh from "../assets/utkarsh chauhan.jpg";
import yash from "../assets/Yash Gupta.jpg";
import aryan from "../assets/Aryan Sachan.jpg";
import karan from "../assets/KARAN BHATT.jpg";


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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 text-center hover:scale-105 transition-transform">
            <div className="w-32 h-32 bg-magenta-500 border-4 border-black rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src={utkarsh}
                alt="Team Member 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-black text-black">Utkarsh Chauhan</div>
            <div className="text-sm font-bold text-black">Lead</div>
          </div>

          <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 text-center hover:scale-105 transition-transform">
            <div className="w-32 h-32 bg-magenta-500 border-4 border-black rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src={yash}
                alt="Team Member 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-black text-black">Yash Gupta</div>
            <div className="text-sm font-bold text-black">Co-Lead</div>
          </div>

          <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 text-center hover:scale-105 transition-transform">
            <div className="w-32 h-32 bg-magenta-500 border-4 border-black rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src={aryan}
                alt="Team Member 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-black text-black">Aryan Sachan</div>
            <div className="text-sm font-bold text-black">Tech Lead</div>
          </div>

          <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 text-center hover:scale-105 transition-transform">
            <div className="w-32 h-32 bg-magenta-500 border-4 border-black rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src={karan}
                alt="Team Member 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-black text-black">Karan Bhatt</div>
            <div className="text-sm font-bold text-black">Tech Co-Lead</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
