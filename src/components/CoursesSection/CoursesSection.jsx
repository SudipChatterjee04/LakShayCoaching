import React from "react";
import CourseItem from "../CourseItem/CourseItem";
import myCourseImage1 from './courses-01.jpg'

const CoursesSection = () => {
    const coursesData = [
        {
          imgSrc: "assets/images/courses-01.jpg",
          title: "Tutorials",
          description:
            "We provide complete step-by-step guidance to walk you through, to accomplish different tasks.",
        },
        {
          imgSrc: "assets/images/courses-02.jpg",
          title: "Home Tuitions",
          description:
            "We provide personalized training services for students from certified tutors right at your home.",
        },
        {
          imgSrc: "assets/images/courses-03.jpg",
          title: "Live Courses",
          description:
            "We undertake services such as motivational result-driven classes and stress-releasing sessions.",
        },
        {
          imgSrc: "assets/images/courses-04.jpg",
          title: "Online Tutorials",
          description:
            "We have expert & experienced faculty members who provide online tutoring for kids to learn online.",
        },
        {
          imgSrc: "assets/images/courses-05.jpg",
          title: "Competitive Exams",
          description:
            "We have vastly experienced staff members who will ensure your success in various competitive exams.",
        },
        {
          imgSrc: "assets/images/courses-01.jpg",
          title: "Institute for Commerce",
          description:
            "Now study Commerce from any of our esteemed institutes & pass out with flying colors & a stable job in hand.",
        },
        {
          imgSrc: "assets/images/courses-02.jpg",
          title: "Tutorials for ICSE class 12 Commerce",
          description:
            "We have experienced teachers to teach students of class XII commerce so that they learn from the basics.",
        },
        {
          imgSrc: "assets/images/courses-03.jpg",
          title: "Foundation Courses",
          description:
            "In this course structure, students of school levels, up to class X, are rendered coaching in all subjects.",
        },
        {
          imgSrc: "assets/images/courses-04.jpg",
          title: "Medical Courses",
          description:
            "Students of classes XI and XII are prepared for entrances. Also, medical students are given regular coaching.",
        },
        {
          imgSrc: "assets/images/courses-05.jpg",
          title: "Engineering Courses",
          description:
            "Students of classes XI and XII are prepared for entrances. Also, engineering students are given regular coaching.",
        },
      ];
      

  return (
    <section className="section courses" data-section="section4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Choose Your Course</h2>
            </div>
          </div>
          <div className="owl-carousel owl-theme">
            {coursesData.map((course, index) => (
              <CourseItem key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
