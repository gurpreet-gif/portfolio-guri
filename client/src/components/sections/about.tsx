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
            <h3 className="text-2xl font-semibold text-portfolio-secondary mb-6">
              Professional Summary
            </h3>

            <p className="text-slate-600 leading-relaxed mb-4">
              Motivated and detail-oriented Computer Science Engineering student (B.Tech, 2021–2025) 
              with practical experience in data analysis, business intelligence, and full-stack web 
              development. Skilled in technologies such as React.js, Next.js, Node.js, MongoDB, 
              Power BI, Python, and SQL.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Successfully completed virtual internships with Deloitte Australia and British Airways 
              via Forage, focusing on dashboard development, data-driven insights, and predictive 
              modeling. A proactive team player with strong analytical and problem-solving abilities.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-portfolio-secondary mb-3">Education</h4>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="font-medium text-portfolio-secondary">Bachelor of Technology (B.Tech), Computer Science Engineering</div>
                <div className="text-slate-600">Amritsar Group of Colleges, Punjab</div>
                <div className="text-sm text-slate-500">Jan 2021 – Jan 2025</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-portfolio-secondary mb-3">Key Internships</h4>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="font-medium text-portfolio-secondary">KocharTech Pvt. Ltd.</div>
                  <div className="text-sm text-slate-600">6 Months - Power BI Dashboard Development</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="font-medium text-portfolio-secondary">Deloitte Australia (via Forage)</div>
                  <div className="text-sm text-slate-600">Data Analytics & Tableau Visualization</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="font-medium text-portfolio-secondary">British Airways (via Forage)</div>
                  <div className="text-sm text-slate-600">Customer Analytics & Predictive Modeling</div>
                </div>
              </div>
            </div>

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
                <a href="/Gurpreet_Professional_Resume.pdf" target="_blank" rel="noopener noreferrer">
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
