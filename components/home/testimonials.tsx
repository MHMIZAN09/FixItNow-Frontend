import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Customer",
    review:
      "I needed an electrician urgently and found a great professional through FixItNow. The booking process was simple and the service was excellent.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "Customer",
    review:
      "FixItNow made finding a reliable cleaning service really easy. The technician arrived on time and did a great job.",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    role: "Customer",
    review:
      "I really liked being able to check technician profiles and reviews before booking. It made me feel confident about my choice.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="border-t bg-muted/30 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Customer Reviews
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            Real experiences from customers who trusted FixItNow with their home
            services.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-2xl border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />

              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-current text-yellow-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                “{testimonial.review}”
              </p>

              {/* Customer */}
              <div className="mt-6 flex items-center gap-3 border-t pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>

                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
