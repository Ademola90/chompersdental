"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      text: "I've been coming to Chompers Family Dental for years and have always received excellent care. Dr. Manji and her team are professional, gentle, and truly care about their patients.",
      rating: 5,
    },
    {
      id: 2,
      name: "David L.",
      text: "As someone who used to be terrified of dental visits, I can't recommend Chompers enough. They made me feel comfortable and explained everything clearly. My kids love coming here too!",
      rating: 5,
    },
    {
      id: 3,
      name: "Michelle K.",
      text: "The staff at Chompers is amazing! They're always friendly and accommodating. I appreciate their commitment to using the latest technology while being environmentally conscious.",
      rating: 5,
    },
  ];

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          What Our Patients Say
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="flex mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                )
              )}
            </div>
            <p className="text-gray-600 text-lg italic mb-6">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="font-semibold text-gray-800">
              - {testimonials[currentTestimonial].name}
            </p>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentTestimonial === index ? "bg-green-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
