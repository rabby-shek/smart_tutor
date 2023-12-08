import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Column = styled.div`
  flex: 0 0 calc(33.3333% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 30px;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(50% - 20px);
    margin-right: 0;
  }

  @media (max-width: 576px) {
    flex: 0 0 100%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center; /* Center the icons horizontally */
  align-items: center; /* Center the icons vertically */
  text-align: center;

  svg {
    font-size: 24px;
    margin-right: 10px;
    color: #fff; /* Change to your desired color */
    transition: color 0.5s;
    cursor: pointer;

    &:hover {
      color: #007bff; /* Change to your desired hover color */
    }
  }
`;

const Links = styled.div`
  a {
    display: block;
    color: #fff;
    margin-bottom: 8px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #007bff; /* Change to your desired hover color */
    }
  }
`;

const Logo = styled.div`
  img {
    width: 100px;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  div {
    color: #fff;
    margin-top: 8px;
    font-weight: bold;
  }
`;

const FooterTop = () => {
  return (
    <Container>
      <Row>
        <Column>
          <SocialIcons>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </SocialIcons>
          <p style={{marginTop:"10px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quam veritatis nam, enim ex suscipit nostrum? Optio unde ipsa ipsum.
          </p>
        </Column>
        <Column>
          <Links>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tutions">Tutions</NavLink>
            <NavLink to="/tutors">Tutors</NavLink>
            <NavLink to="/request">Tutor Request</NavLink>
            <NavLink to="/courses">Our Courses</NavLink>
          </Links>
        </Column>
        <Column>
          <Logo>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt=""
            />
            <div>Smart Tutor</div>
          </Logo>
        </Column>
      </Row>
    </Container>
  );
};

export default FooterTop;
