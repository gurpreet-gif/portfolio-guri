import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-secondary mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating impactful digital
            experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-secondary mb-4">
              Building the Future, One Line of Code at a Time
            </h3>

            <p className="text-slate-600 leading-relaxed">
              With over 3 years of experience in full-stack development, I
              specialize in creating scalable web applications using modern
              technologies. My journey began with a fascination for
              problem-solving and has evolved into a passion for building
              solutions that make a real difference.
            </p>

            <p className="text-slate-600 leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest industry trends. When I'm not coding,
              you'll find me contributing to open-source projects, learning new
              technologies, or sharing knowledge with the developer community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-portfolio-primary">
                  25+
                </div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-portfolio-primary">
                  3+
                </div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                asChild
                className="bg-portfolio-primary hover:bg-blue-600 text-white"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
