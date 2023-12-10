import React from "react";
import heroImage from "../../assets/images/hero-removebg-preview.png";
import { CiLocationOn, CiSearch } from "react-icons/ci";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-left">
        <h1>
          Best <span>Tutoring Platform</span> for Home & Online Tuitions
        </h1>
        <p>
          <CiLocationOn />
          Find the right tutor in your area
        </p>
        <button>
          <span>
            <CiSearch className="icon" />
          </span>
          Find a Tutor
        </button>
      </div>
      <div className="hero-section-right">
        <img src={heroImage} alt="Smart Tutor" />
      </div>
    </section>
  );
};

export default HeroSection;
