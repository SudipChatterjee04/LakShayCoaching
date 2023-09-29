import React from "react";

import SectionHeadingtestimonial from "../../SectionHeadingtestimonial/SectionHeadingtestimonial";
import TestimonialItem from "../../TestimonialItem/TestimonialItem";


const testimonials = [
  {
    imgSrc: "assets/images/testimonial-1.jpg",
    name: "Sayak Tiwari",
    role: "Student",
    text:
      "One of the best teachers I have studied with. Friendly and approachable, always willing to help.",
  },
  {
    imgSrc: "assets/images/testimonial-2.jpg",
    name: "Debdiya Mukherjee",
    role: "Student",
    text:
      "My results improved significantly within a few months. Regular tests and doubt classes were very helpful.",
  },
  {
    imgSrc: "assets/images/testimonial-3.jpg",
    name: "Souhardya Chakraborty",
    role: "Student",
    text:
      "An amazing teacher who simplifies complex concepts. Regular tests help us track our progress.",
  },
  {
    imgSrc: "assets/images/testimonial-4.jpg",
    name: "Ahana De",
    role: "Student",
    text:
      "The best math tutor I have ever come across. Makes math easier and more interesting.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="section video" data-section="section5">
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <SectionHeadingtestimonial title="Our Testimonials" />

          <div className="owl-carousel testimonial-carousel position-relative">
            {testimonials.map((testimonial, index) => (
              <TestimonialItem
                key={index}
                imgSrc={testimonial.imgSrc}
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;