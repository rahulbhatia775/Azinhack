import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import logo from "../assets/logo2.png"; // ✅ Import your logo

const ContactSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="bg-magenta py-20 md:py-32 border-t-8 border-black relative overflow-hidden"
    >
      

      {/* ✅ Logo in top-left
      <div className="absolute top-6 left-6 z-20">
        <img
          src={logo}
          alt="Azinhack Logo"
          className="w-30 h-20 md:w-24 md:h-24 rounded-full border-4 border-black shadow-lg bg-white p-1"
        />
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black text-black mb-8">
            GET IN TOUCH
          </h2>

          <p className="text-xl md:text-2xl font-bold text-black mb-12">
            Register now for Azinhack 2025 and be part of 24 hours of innovation!
          </p>

          {/* Form (currently commented out) */}
          {/* <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 text-lg font-bold border-4 border-black h-14 px-6 focus:ring-cyan"
              />
              <Button
                type="submit"
                className="bg-yellow text-black font-black text-xl px-8 border-4 border-black shadow-bold hover:bg-cyan hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all h-14"
              >
                REGISTER
              </Button>
            </div>
          </form> */}

          {/* Social Links */}
          <div className="mt-16 space-y-6">
            <div className="flex flex-wrap justify-center gap-6 text-xl font-black text-black">
              <a
                href="mailto:iosc.edc@gmail.com"
                className="hover:text-white transition-colors"
              >
                EMAIL
              </a>
              <span>•</span>
              <a
                href="https://www.instagram.com/iosc_edc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                INSTAGRAM
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/company/iosc-edc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LINKEDIN
              </a>
            </div>

            <div className="text-lg font-bold text-black">
              📧 iosc.edc@gmail.com | 📱 +91 93687 53494 (Mr Utkarsh Chauhan, Lead IoSC EDC)
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-10 border-t-4 border-black text-center">
        <p className="text-lg font-bold text-black">
          Copyright © Azinhack 2025 | Organized by IoSC EDC
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;
