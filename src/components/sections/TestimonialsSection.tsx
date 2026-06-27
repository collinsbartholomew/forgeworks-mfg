import { testimonials } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <div className="section-label justify-center">
            <span className="section-label-line bg-accent" />
            <span className="section-label-text text-accent">Testimonials</span>
          </div>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        <div className="grid md-grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-heading font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-black-60 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
