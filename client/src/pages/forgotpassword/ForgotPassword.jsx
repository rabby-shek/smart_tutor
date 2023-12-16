import React from "react";
import styled from "styled-components";

const ForgotPassFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  justify-content: center;
  height: 100vh;
`;

const ForgotPassForm = styled.form`
  text-align: center;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #ffffff;
  margin-bottom: 100px;
`;

const FormLabel = styled.label`
  margin-bottom: 20px;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 10px;
`;



const SubmitButton = styled.button`
  background-color: #3498db;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #2980b9;
  }
`;

const ForgotPasswordText = styled.p`
  margin-top: 10px;
  text-align: center;
  color: #3498db;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPassword = () => {
  return (
    <ForgotPassFormContainer>
      <ForgotPassForm>
        <FormLabel htmlFor="email">Reset your password</FormLabel>
        <FormInput type="email" id="email" name="email" />
        <SubmitButton type="submit">Send Otp</SubmitButton>
        <ForgotPasswordText>Resend OTP?</ForgotPasswordText>
      </ForgotPassForm>
    </ForgotPassFormContainer>
  );
};

export default ForgotPassword;
