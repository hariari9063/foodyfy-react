import React, { useEffect } from "react";
import "./stylesheets/aboutus.css";
import { FaUsers, FaBoxOpen, FaSmile } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    { icon: <FaUsers />, value: 1200, label: "Happy Customers" },
    { icon: <FaBoxOpen />, value: 5000, label: "Products Sold" },
    { icon: <FaSmile />, value: 99, label: "Satisfaction %" },
  ];

  const team = [
    { name: "Alice", role: "Founder & CEO", img: "/Images/team1.jpg" },
    { name: "Bob", role: "Head Chef", img: "/Images/team2.jpg" },
    { name: "Charlie", role: "Marketing Lead", img: "/Images/team3.jpg" },
  ];

  return (
    <div className="aboutus-page">
  
      <section className="hero parallax">
        <div className="overlay text-center">
          <h1 data-aos="fade-up">We Make Delicious Memories 🍫🍗🥤</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Passionate about delivering joy, one product at a time.
          </p>
        </div>
      </section>

      <section className="mission-vision container py-5">
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card shadow-sm p-4">
              <h2>Our Mission</h2>
              <p>
                To bring the finest chocolates, snacks, and drinks to every doorstep
                with love, care, and quality.
              </p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card shadow-sm p-4">
              <h2>Our Vision</h2>
              <p>
                Becoming the most loved food brand by combining taste, innovation,
                and happiness in every bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats parallax-light text-center py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {stats.map((item, index) => (
              <div
                key={index}
                className="col-6 col-md-4"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <div className="stat-card shadow">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team py-5 text-center">
        <h2 data-aos="fade-up" className="mb-4">Meet Our Team</h2>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {team.map((member, index) => (
              <div
                key={index}
                className="col-10 col-sm-6 col-md-4"
                data-aos="flip-left"
                data-aos-delay={index * 200}
              >
                <div className="team-card shadow-sm">
                  <img src={member.img} alt={member.name} />
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta parallax text-center text-white">
        <div className="overlay-content">
          <h2 data-aos="fade-up">Ready to Explore?</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Check out our wide range of products and make your day delicious!
          </p>
          <button className="btn btn-light btn-lg mt-3" data-aos="zoom-in" data-aos-delay="400">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
