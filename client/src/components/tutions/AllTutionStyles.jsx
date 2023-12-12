import styled from "styled-components";
export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  gap: 20px;
  max-width: 100%; /* Set a maximum width for the container if needed */
`;

export const Card = styled.div`
  padding: 20px;
  text-align: center;
  width: 350px;
  height: 300px;
  transition: transform 0.3s ease-in-out;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: #c0ceca;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const CardHeader = styled.h2`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBody = styled.p`
  margin-bottom: 20px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SalaryContainer = styled.span`
  font-size: 20px;
  color: #000;
`;
export const DetailsButton = styled.button`
  background-color: #fff;
  color: #000;
  font-size: 13px;
  padding: 5px 10px;
  border: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;
// Styled components for the div elements in the body
export const StyledDiv = styled.div`
  margin: 10px 0;
  font-size: 14px;
`;

export const StyledDivWithIcon = styled.div`
  margin: 10px 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
  }
`;
