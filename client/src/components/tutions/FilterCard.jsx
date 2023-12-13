import React, { useState } from "react";
import styled from "styled-components";
import { CiFilter } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
const FilterCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;
const FilterCard = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <FilterCardContainer onClick={toggleMenu}>
     <h3 style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      color:"#3498db"
     }}> Advance Filter <CiFilter /></h3>
      <div className={`offcanvas ${isMenuOpen ? "active" : ""}`}>
        <FaTimes
          style={{
            color: "white",
            position: "fixed",
            right: 20,
            top: 35,
            cursor: "pointer",
          }}
          onClick={closeMenu}
        />
        <div className={`offcanvas-nav-links`}></div>
      </div>
    </FilterCardContainer>
  );
};

export default FilterCard;
