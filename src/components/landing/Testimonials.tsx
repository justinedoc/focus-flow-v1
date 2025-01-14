import { testimonialInfo } from "./constants/TestimonialInfo";
import SectionHeader from "./ui/SectionHeader";
import TestimonialCard from "./ui/TestimonialCard";

function Testimonials() {
  return (
    <section
      id="features"
      className="__section-padding flex flex-col items-center"
    >
      <SectionHeader tag="Testimonials" title="What our users say" />
      <article className="flex flex-col gap-10 my-8 w-full">
        <main className="__testimonial-card">
          {testimonialInfo.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} data={testimonial} />
          ))}
        </main>
        <main className="__testimonial-card">
          {testimonialInfo.slice(3, 6).map((testimonial) => (
            <TestimonialCard data={testimonial} />
          ))}
        </main>
      </article>
    </section>
  );
}

export default Testimonials;
