import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Star, Quote, Plus, Loader2 } from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  createdAt: string;
}

interface ReviewFormData {
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
}

const Reviews = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    role: "",
    company: "",
    rating: 5,
    review: "",
  });

  // Fetch existing reviews
  const { data: reviews = [], isLoading } = useQuery<Review[]>({
    queryKey: ['/api/reviews'],
  });

  // Submit new review
  const submitReview = useMutation({
    mutationFn: async (data: ReviewFormData) => {
      const response = await apiRequest("POST", "/api/reviews", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Review Submitted!",
        description: "Thank you for your testimonial. It will be displayed shortly.",
      });
      setFormData({ name: "", role: "", company: "", rating: 5, review: "" });
      setShowForm(false);
      // Invalidate and refetch reviews
      window.location.reload();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.review) {
      toast({
        title: "Error",
        description: "Please fill in at least your name and review.",
        variant: "destructive",
      });
      return;
    }

    submitReview.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: name === 'rating' ? parseInt(value) : value 
    }));
  };

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
            Read testimonials from colleagues and collaborators, or share your own experience working with me
          </p>
        </div>

        {/* Add Review Button */}
        <div className="text-center mb-12">
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-portfolio-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            <Plus size={20} className="mr-2" />
            {showForm ? "Cancel" : "Add Your Review"}
          </Button>
        </div>

        {/* Review Form */}
        {showForm && (
          <Card className="max-w-2xl mx-auto mb-12 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-portfolio-secondary mb-6">
                Share Your Experience
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="Your job title"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Where you work"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                    <option value={2}>2 Stars - Fair</option>
                    <option value={1}>1 Star - Poor</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="review">Your Review *</Label>
                  <Textarea
                    id="review"
                    name="review"
                    placeholder="Share your experience working with Gurpreet..."
                    value={formData.review}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitReview.isPending}
                  className="w-full bg-portfolio-primary hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  {submitReview.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Review"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Reviews Display */}
        {isLoading ? (
          <div className="text-center py-12">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-slate-600">Loading reviews...</p>
          </div>
        ) : reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review: Review) => (
              <Card
                key={review.id}
                className="bg-slate-50 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="absolute top-4 right-4 text-portfolio-primary opacity-20">
                    <Quote size={40} />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-portfolio-primary text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-semibold text-portfolio-secondary">
                        {review.name}
                      </h4>
                      {review.role && <p className="text-sm text-slate-600">{review.role}</p>}
                      {review.company && <p className="text-sm text-slate-500">{review.company}</p>}
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
        ) : (
          <div className="text-center py-12">
            <Quote size={48} className="mx-auto mb-4 text-slate-400" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No Reviews Yet</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Be the first to share your experience working with Gurpreet! Click "Add Your Review" above to get started.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;