import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiLocationOn } from "react-icons/ci";
const PopularTutors = () => {
  // Inside your PopularTutors component
  const tutors = [
    {
      name: "John Doe",
      description:
        "Experienced Math tutor with a focus on algebra and calculus.",
      location: "Dhaka",
    },
    {
      name: "Jane Smith",
      description:
        "Passionate English teacher specializing in literature and writing.",
      location: "Dhaka",
    },
    {
      name: "David Johnson",
      description:
        "Science enthusiast offering tutoring in physics and chemistry.",
      location: "Dhaka",
    },
    {
      name: "Emily Davis",
      description:
        "History tutor with a keen interest in world history and politics.",
      location: "Dhaka",
    },
    {
      name: "Michael Brown",
      description:
        "Computer Science expert covering programming and algorithms.",
      location: "Dhaka",
    },
    {
      name: "Sophia Wilson",
      description: "Art teacher inspiring creativity in drawing and painting.",
      location: "Dhaka",
    },
    {
      name: "Ryan Miller",
      description:
        "Spanish tutor providing lessons in grammar and conversation.",
      location: "Dhaka",
    },
    {
      name: "Olivia Robinson",
      description: "Music teacher specializing in piano and music theory.",
      location: "Dhaka",
    },
    {
      name: "Ethan Martinez",
      description:
        "Physical Education coach focusing on fitness and sports training.",
      location: "Dhaka",
    },
    {
      name: "Ava Garcia",
      description: "French tutor offering lessons in language and culture.",
      location: "Dhaka",
    },
  ];

  // Rest of the code remains the same...
  // Your array of tutor data (you can replace it with your actual data)

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed as needed
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider className="slider_container" {...sliderSettings}>
      {tutors.map((tutor, index) => (
        <div key={index} className="slider_card">
          {/* Your tutor card content goes here */}
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
            alt=""
          />
          <h3 style={{
            marginTop:"10px"
          }}>{tutor.name}</h3>

          <p>{tutor.description}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
            }}
          >
            <CiLocationOn />
            {tutor.location}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PopularTutors;
