import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "⚛️",
      color: "blue",
      skills: ["React", "Vue.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: "🚀",
      color: "green",
      skills: ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "orange",
      skills: ["AWS", "Docker", "Git", "CI/CD", "Kubernetes"],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "purple",
      skills: ["VS Code", "Figma", "Postman", "Jest", "Agile"],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      orange: "bg-orange-100 text-orange-800",
      purple: "bg-purple-100 text-purple-800",
    };
    return colorMap[color] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-secondary mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-portfolio-secondary mb-3">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${getColorClasses(
                        category.color
                      )} mr-2 mb-2 text-sm font-medium`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
