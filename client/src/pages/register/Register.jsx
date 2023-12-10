import React, { useState } from "react";
import styled from "styled-components";
import district from "../../data/district";
import division from "../../data/division";
import upazila from "../../data/upazila";
import Select from "react-select";
import unions from "../../data/unions";
const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
`;

const Header = styled.h1`
  color: #3498db;
  text-align: center;
`;

const RegisterForm = styled.form`
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

const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #333;
`;

const FormInput = styled.input`
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

const FormSelect = styled(Select)`
  width: 100%;
  margin-bottom: 16px;
  margin-top: 5px;
  &:focus {
    border-color: #fff;
    outline: none;
  }
`;

// ... (previous code)

const SubmitButton = styled.button`
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

const Register = () => {
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedUpazila, setSelectedUpazila] = useState(null);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [upazilaOptions, setUpazilaOptions] = useState([]);
  const [unionOptions, setUnionOptions] = useState([]);
  const [preferredAreaOptions, setPreferredAreaOptions] = useState([]);

  const handleDivisionChange = (selectedOption) => {
    setSelectedDivision(selectedOption);
    // Update districts based on the selected division
    const selectedDivisionId = selectedOption.value;
    const filteredDistricts = district.filter(
      (district) => district.division_id === selectedDivisionId
    );
    setDistrictOptions(
      filteredDistricts.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    );
  };

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
    // Update upazilas based on the selected district
    const selectedDistrictId = selectedOption.value;
    const filteredUpazilas = upazila.filter(
      (upazila) => upazila.district_id === selectedDistrictId
    );
    setUpazilaOptions(
      filteredUpazilas.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    );
  };

  const handleUpazilaChange = (selectedOption) => {
    setSelectedUpazila(selectedOption);
    // Update unions and preferred areas based on the selected upazila
    const selectedUpazilaId = selectedOption.value;

    // Update unions
    const filteredUnions = unions.filter(
      (union) => union.upazilla_id === selectedUpazilaId
    );
    setUnionOptions(
      filteredUnions.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    );

    // Update preferred areas (assuming preferred locations are stored in a data array)
    const filteredPreferredAreas = unions.filter(
      (location) => location.upazilla_id === selectedUpazilaId
    );
    setPreferredAreaOptions(
      filteredPreferredAreas.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    );
  };

  const registerTypeOptions = [
    { value: "student", label: "Student" },
    { value: "tutor", label: "Tutor" },
  ];

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  return (
    <RegisterFormContainer>
      {/* <Header>Register</Header> */}
      <RegisterForm>
        <div>
          <FormLabel htmlFor="registerType">Register Type</FormLabel>
          <FormSelect
            id="registerType"
            name="registerType"
            options={registerTypeOptions}
          />

          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" id="name" name="name" />

          <FormLabel htmlFor="gender">Gender</FormLabel>
          <FormSelect id="gender" name="gender" options={genderOptions} />

          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" name="email" />

          <FormLabel htmlFor="phone">Phone</FormLabel>
          <FormInput type="tel" id="phone" name="phone" />

          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput type="password" id="password" name="password" />
        </div>

        <div>
          <FormLabel htmlFor="divison">Tuition Division</FormLabel>
          <FormSelect
            id="division"
            name="divion"
            options={division.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
            onChange={handleDivisionChange}
          />

          <FormLabel htmlFor="district">Tuition District</FormLabel>
          <FormSelect
            id="district"
            name="district"
            options={districtOptions}
            onChange={handleDistrictChange}
          />

          <FormLabel htmlFor="upazila">Tuition Upazila</FormLabel>
          <FormSelect
            id="upazila"
            name="upazila"
            options={upazilaOptions}
            onChange={handleUpazilaChange}
          />

          <FormLabel htmlFor="union">Tuition Area</FormLabel>
          <FormSelect id="union" name="union" options={unionOptions} />

          <FormLabel htmlFor="preferredArea">Preferred Tuition Area</FormLabel>
          <FormSelect
            id="preferredArea"
            name="preferredArea"
            options={preferredAreaOptions}
          />

          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <FormInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>

        <SubmitButton type="submit">Register</SubmitButton>
      </RegisterForm>
    </RegisterFormContainer>
  );
};

export default Register;
