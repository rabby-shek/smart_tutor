import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import division from "../../data/division";
import upazila from "../../data/upazila";
const FilterCardContainer = styled.div`
  position: relative;
  border-radius: 8px;
  padding-top: 100px;
  margin-bottom: 100px;
`;

const Header = styled.h3`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;

  svg {
    margin-left: 10px;
  }
`;



const TutionsCardContainer = styled.div`
  margin: 5% 10%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Card = styled.div`
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
    padding: 20px;
    height: 300px;
    cursor: pointer;

    &:hover{
        margin-bottom: 10px;
        background-color: #f0f0f0; /* Change to your desired background color */
        transition: background-color 0.3s ease-in-out; /* Add smooth transition */
    }
`

const PaginationContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  button {
    padding: 8px 12px;
    margin: 0 5px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  span {
    margin: 0 10px;
  }

  div {
    margin-top: 10px;

    input {
      padding: 8px;
      margin-right: 10px;
      width: 50px;
    }

    button {
      padding: 8px 12px;
      cursor: pointer;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
  }
`;

const FilterCard = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [customPage, setCustomPage] = useState(1);
  const cardsPerPage = 10;
 

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const totalCards = 100; // Total number of fake cards

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const fakeCards = Array.from({ length: totalCards }, (_, index) => (
    <div key={index}>
      <Card>
      <div>Location: {division[Math.floor(Math.random() * division.length)].name} ,{upazila[Math.floor(Math.random() * upazila.length)].name}</div>
      <div>ID: {Math.floor(Math.random() * 100000)}</div>
      </Card>
    </div>
  )).slice(startIndex, endIndex);

  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleGoToPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(Math.max(parseInt(customPage) || prevPage, 1), totalPages)
    );
  };

  return (
    <FilterCardContainer>
      <Header onClick={toggleMenu}>
        Advance Filter <CiFilter />
      </Header>

      <div className={`offcanvas ${isMenuOpen ? "active" : ""}`}>
      <FaTimes
          style={{
            color: "white",
            position: "fixed",
            right: 20,
            top: 35,
            cursor:"pointer"
          }}
          onClick={closeMenu}
        />
      </div>

      <TutionsCardContainer>{fakeCards}</TutionsCardContainer>

      <PaginationContainer>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
        <div>
          Go to Page:
          <input
            type="number"
            value={customPage}
            onChange={(e) => setCustomPage(e.target.value)}
            min="1"
            max={totalPages}
          />
          <button onClick={handleGoToPage}>Go</button>
        </div>
      </PaginationContainer>
    </FilterCardContainer>
  );
};

export default FilterCard;
