import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Data Analytics Manager",
      company: "KocharTech Pvt. Ltd.",
      rating: 5,
      review: "Gurpreet demonstrated exceptional skills in Power BI dashboard development during his internship. His ability to transform complex data into actionable insights was impressive. He consistently delivered high-quality work and showed great attention to detail.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c48c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "Solitaire Infosys",
      rating: 5,
      review: "Working with Gurpreet was a pleasure. His frontend development skills, particularly with React.js and responsive design, are outstanding. He quickly grasped complex requirements and delivered clean, maintainable code.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Computer Science Professor",
      company: "Amritsar Group of Colleges",
      rating: 5,
      review: "Gurpreet is one of our most dedicated students. His passion for data analytics and web development is evident in his academic projects. He consistently goes above and beyond, showing real potential for a successful career in technology.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Rajesh Kumar",
      role: "Project Lead",
      company: "Tech Solutions",
      rating: 5,
      review: "Gurpreet's analytical mindset and technical expertise make him a valuable team member. His work on data visualization projects using Python and SQL was exceptional. He has a bright future in the tech industry.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-secondary mb-4">
            What People Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Testimonials from colleagues, mentors, and supervisors who have worked with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-slate-50 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-portfolio-primary opacity-20">
                  <Quote size={40} />
                </div>
                
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-portfolio-secondary">
                      {review.name}
                    </h4>
                    <p className="text-sm text-slate-600">{review.role}</p>
                    <p className="text-sm text-slate-500">{review.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>

                <p className="text-slate-600 leading-relaxed italic">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;