import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const DivisionTutors = () => {
  const cardContent = [
    {
      division: "Dhaka",
      tutors: "12",
    },
    {
      division: "Khulna",
      tutors: "12",
    },
    {
      division: "Barishal",
      tutors: "12",
    },
    {
      division: "Rangpur",
      tutors: "12",
    },
    {
      division: "Meymensingh",
      tutors: "12",
    },
    {
      division: "shylet",
      tutors: "12",
    },
    {
      division: "RajShahi",
      tutors: "12",
    },
    {
      division: "cumilla",
      tutors: "12",
    },
  ];
  return (
    <div>
      
      <motion.div className="carousel">
      <h1>Division Tutors</h1>
        <motion.div drag="x" dragConstraints={{left: -600,right:600}} className="inner-carousel">
          {cardContent.map((content, index) => {
            return (
              <div className="item" key={index}>
                <div>{content.division}</div>
                <div>{content.tutors}</div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DivisionTutors;
