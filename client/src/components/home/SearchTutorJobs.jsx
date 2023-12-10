import React from "react";
import Photo from '../../assets/images/hero-removebg-preview.png';

const SearchTutorJobs = () => {
  return (
    <section className="search-tutor-jobs">
      <div className="image-container">
        <img  className="tutor-image" src={Photo} alt="" />
      </div>
      <div className="text-container">
        <h2>
          Looking for interesting tuition jobs to excel your teaching experience?
        </h2>
        <p>
          If teaching jobs interest you, then you are in the right place.
          tutorsheba.com often has 500+ open home tuition jobs that are
          genuine and 100% verified. Whether you are starting your career as a
          tuition teacher or an expert in your field, we can help you find your
          next big tuition job. You can search and apply to the tuition jobs
          that best fit your skills, favorable location, class, and subjects.
        </p>
      </div>
    </section>
  );
};

export default SearchTutorJobs;
