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
              Currently pursuing B.Tech in Computer Science Engineering (2021-2025) from 
              Amritsar Group of Colleges. I have practical experience through internships 
              with KocharTech, Deloitte Australia, British Airways, and Solitaire Infosys, 
              focusing on data analysis, dashboard development, and web applications.
            </p>

            <p className="text-slate-600 leading-relaxed">
              My expertise spans across full-stack development, business intelligence, and 
              data analytics. I've successfully built interactive dashboards, predictive models, 
              and modern web applications using React.js, Python, Power BI, and various other 
              technologies to deliver data-driven insights.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-portfolio-primary">
                  5+
                </div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-portfolio-primary">
                  4
                </div>
                <div className="text-slate-600">Internships</div>
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
