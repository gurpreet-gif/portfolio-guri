import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Code, Laptop } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-secondary mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-portfolio-primary">Gurpreet</span>
              <br />
              <span className="text-slate-600 text-3xl md:text-4xl lg:text-5xl font-medium">
                Full Stack Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
              Passionate about creating innovative web solutions that combine
              beautiful design with powerful functionality. Specialized in
              modern JavaScript frameworks and cloud technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-portfolio-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <Code className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              <a
                href="https://github.com/gurpreet-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-portfolio-primary text-2xl transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-portfolio-primary text-2xl transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-portfolio-primary text-2xl transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:gurpreet.dev@example.com"
                className="text-slate-600 hover:text-portfolio-primary text-2xl transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                alt="Gurpreet Singh - Professional Developer"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-portfolio-accent text-white p-3 rounded-full shadow-lg animate-bounce">
                <Code size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <Laptop size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
