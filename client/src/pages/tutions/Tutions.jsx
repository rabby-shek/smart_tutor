import React from "react";
import FilterCard from "../../components/tutions/FilterCard";
import AllTutions from "../../components/tutions/AllTutions";
import styled from "styled-components";

const TutionsContainer = styled.div`
  padding-top: 70px;
  margin-bottom: 10%;
`;
const Tutions = () => {
  return (
    <TutionsContainer>
      <FilterCard />
      <AllTutions />
    </TutionsContainer>
  );
};

export default Tutions;
