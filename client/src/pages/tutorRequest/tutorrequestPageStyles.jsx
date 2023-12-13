import styled from "styled-components";
import Select from "react-select";
export const TutorRequestFormContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
`;
export const ParagaraphText = styled.p`
  text-align: center;
  max-width: 700px;
  font-size: 15px;
  margin-bottom: 10px;
  padding: 0px 10px;
`
export const Header = styled.h1`
color: #3498db;
text-align: center;
margin-bottom: 10px;
`;
export const TutorRequestForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #ffffff;
  margin: 20px 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 20px 10px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #333;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

export const FormSelect = styled(Select)`
  width: 100%;
  margin-bottom: 16px;
  margin-top: 5px;
  &:focus {
    border-color: #fff;
    outline: none;
  }
`;

// ... (previous code)

export const SubmitButton = styled.button`
  background-color: #3498db;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3498db;
  }

  @media (min-width: 768px) {
    grid-column: span 2; // Span across two columns for larger screens
  }
`;