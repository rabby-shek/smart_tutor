import React from "react";
import styled from "styled-components";

const OtpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  justify-content: center;
  height: 100vh;
`;

const OtpForm = styled.form`
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

const Text = styled.p`
  margin-top: 10px;
  text-align: center;
  color: #3498db;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Otp = () => {
  return (
    <OtpFormContainer>
      <OtpForm>
        <FormLabel htmlFor="otp">OTP Varification</FormLabel>
        <FormInput type="number" id="otp" name="otp" />
        <SubmitButton type="submit">Submit</SubmitButton>
        <Text>Resend OTP?</Text>
      </OtpForm>
    </OtpFormContainer>
  );
};

export default Otp;
