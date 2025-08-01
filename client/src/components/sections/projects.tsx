import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Text Converter",
      description:
        "Advanced text analysis and manipulation tool with features like uppercase/lowercase conversion, word counting, character analysis, reading time estimation, and text formatting options. Built with React for seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "JavaScript", "Text Processing", "Web App"],
      githubUrl: "https://github.com/gurpreet-gif/V-react-code-my-app",
      liveUrl: "https://gurpreet-gif.github.io/V-react-code-my-app/",
    },
    {
      title: "Sales Analytics Dashboard",
      description:
        "Interactive Power BI dashboard visualizing key sales metrics with trend analysis and actionable business insights. Built comprehensive data models for real-time analytics and performance tracking.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Power BI", "SQL", "Python", "Excel"],
      githubUrl: "https://github.com/gurpreet-gif",
      liveUrl: "#",
    },
    {
      title: "News Web Application",
      description:
        "Real-time news web application with third-party API integration for live news feeds. Features responsive design, category filtering, and dynamic content loading using React.js and Bootstrap.",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["React.js", "Bootstrap", "API Integration", "JavaScript"],
      githubUrl: "https://github.com/gurpreet-gif",
      liveUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with secure user authentication, dynamic product listings, shopping cart functionality, and MongoDB database integration. Built with React.js frontend and Node.js backend.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["React.js", "Node.js", "MongoDB", "Authentication"],
      githubUrl: "https://github.com/gurpreet-gif",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-secondary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work and contributions to the development
            community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-slate-50 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-portfolio-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-portfolio-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-portfolio-primary hover:bg-blue-600 text-white"
          >
            <a
              href="https://github.com/gurpreet-gif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
