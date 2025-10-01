import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import utkarsh from "../assets/utkarsh chauhan.jpg";
import yash from "../assets/Yash Gupta.jpg";
import aryan from "../assets/Aryan Sachan.jpg";
import karan from "../assets/KARAN BHATT.jpg";
import khushi from "../assets/Khushi_Thakur.jpg";
import pari from "../assets/Pari Dudeja.jpg";
import parth from "../assets/ParthMawai.jpg";

const teamMembers = [
  { name: "Utkarsh Chauhan", role: "Organising Head & Lead", img: utkarsh },
  { name: "Khushi Thakur", role: "Organising Head", img: khushi },
  { name: "Yash Gupta", role: "Mentor", img: yash },
  { name: "Aryan Sachan", role: "Mentor", img: aryan },
  { name: "Karan Bhatt", role: "Mentor", img: karan },
  { name: "Pari Dudeja", role: "Mentor", img: pari },
  { name: "Parth Mawai", role: "Mentor", img: parth },
];

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
            The IoSC EDC is a community of passionate students dedicated
            to fostering innovation, entrepreneurship, and technical excellence.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          className="pb-10 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 text-center hover:scale-105 transition-transform">
                <div className="w-32 h-32 bg-magenta-500 border-4 border-black rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xl font-black text-black">{member.name}</div>
                <div className="text-sm font-bold text-black">{member.role}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
