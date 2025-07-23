import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-portfolio-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gurpreet Singh</h3>
            <p className="text-slate-300 mb-4">
              Full Stack Developer passionate about creating innovative web
              solutions that make a difference.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/gurpreet-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.instagram.com/its_ramgarhia.07?igsh=Mnk3dHNsM282cTkw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/share/14FH9XubmyH/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://linkedin.com/in/gurpreet-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-300">
              <p>gurpreet vilkhu80@gmail.com</p>
              <p>+91-8569086202</p>
              <p>Amritsar, Punjab, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            &copy; 2024 Gurpreet Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
