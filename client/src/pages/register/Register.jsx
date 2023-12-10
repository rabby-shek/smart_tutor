import React, { useState } from "react";
import district from "../../data/district";
import division from "../../data/division";
import upazila from "../../data/upazila";
import unions from "../../data/unions";
import {
  genderOptions,
  registerTypeOptions,
} from "../../data/registerFormData";
import {
  RegisterFormContainer,
  RegisterForm,
  FormLabel,
  FormInput,
  FormSelect,
  SubmitButton,
} from "./registerFormStyles";

const Register = () => {
  const [formData, setFormData] = useState({
    registerType: "",
    name: "",
    gender: "",
    email: "",
    phone: "",
    division: "",
    district: "",
    upazila: "",
    union: "",
    preferredArea: "",
    password: "",
    confirmPassword: "",
  });
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

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <RegisterFormContainer>
      {/* <Header>Register</Header> */}
      <RegisterForm onSubmit={handleSubmit}>
        <div>
          <FormLabel htmlFor="registerType">Register Type</FormLabel>
          <FormSelect
            id="registerType"
            name="registerType"
            options={registerTypeOptions}
            value={formData.registerType}
            onChange={(selectedOption) => handleInputChange("registerType", selectedOption.value)}
          />

          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(selectedOption) => handleInputChange("name", selectedOption.value)}
            
          />

          <FormLabel htmlFor="gender">Gender</FormLabel>
          <FormSelect
            id="gender"
            name="gender"
            options={genderOptions}
            value={formData.gender}
         
          />

          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            
          />

          <FormLabel htmlFor="phone">Phone</FormLabel>
          <FormInput
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
          
          />

          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            id="password"
            name="password"
            value={formData.password}
          />
        </div>

        <div>
          <FormLabel htmlFor="divison">Tuition Division</FormLabel>
          <FormSelect
            id="division"
            name="division"
            options={division.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
            onChange={handleDivisionChange}
            value={formData.division}
          />

          <FormLabel htmlFor="district">Tuition District</FormLabel>
          <FormSelect
            id="district"
            name="district"
            options={districtOptions}
            onChange={handleDistrictChange}
            value={formData.district}
          />

          <FormLabel htmlFor="upazila">Tuition Upazila</FormLabel>
          <FormSelect
            id="upazila"
            name="upazila"
            options={upazilaOptions}
            onChange={handleUpazilaChange}
            value={formData.upazila}
          />

          <FormLabel htmlFor="union">Tuition Area</FormLabel>
          <FormSelect
            id="union"
            name="union"
            options={unionOptions}
            value={formData.union}
          />

          <FormLabel htmlFor="preferredArea">Preferred Tuition Area</FormLabel>
          <FormSelect
            id="preferredArea"
            name="preferredArea"
            options={preferredAreaOptions}
            value={formData.preferredArea}
          />

          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <FormInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
          />
        </div>

        <SubmitButton type="submit">Register</SubmitButton>
      </RegisterForm>
    </RegisterFormContainer>
  );
};

export default Register;
