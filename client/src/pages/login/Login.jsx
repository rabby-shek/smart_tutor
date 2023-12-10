import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #ffffff;
  margin-bottom: 100px;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
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

const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <FormLabel htmlFor="username">Username</FormLabel>
        <FormInput type="text" id="username" name="username" />

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput type="password" id="password" name="password" />

        <FormLabel htmlFor="userType">User Type</FormLabel>
        <FormSelect id="userType" name="userType">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          {/* Add more user types as needed */}
        </FormSelect>

        <SubmitButton type="submit">Login</SubmitButton>
        <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
