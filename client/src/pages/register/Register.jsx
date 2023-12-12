import React, { useState } from "react";
import district from "../../data/district";
import division from "../../data/division";
import upazila from "../../data/upazila";
import unions from "../../data/unions";
import Notification from "../../components/notification/Notification";
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
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedUpazila, setSelectedUpazila] = useState(null);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [upazilaOptions, setUpazilaOptions] = useState([]);
  const [unionOptions, setUnionOptions] = useState([]);
  const [preferredAreaOptions, setPreferredAreaOptions] = useState([]);
  const [notification, setNotification] = useState(null);
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

  const handleDivisionChange = (selectedOption) => {
    setSelectedDivision(selectedOption);

    setFormData((prevData) => ({
      ...prevData,
      division: selectedOption.label,
    }));
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
    setFormData((prevData) => ({
      ...prevData,
      district: selectedOption.label,
    }));
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
    setFormData((prevData) => ({
      ...prevData,
      upazila: selectedOption.label,
    }));

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
  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  const validateForm = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.registerType.trim()) {
      valid = false;
      showNotification("error", "Please Select a User Type");
    } else if (!formData.name.trim()) {
      valid = false;
      showNotification("error", "Name is required");
    } else if (formData.name.length < 3) {
      valid = false;
      showNotification("error", "Name at least 3 characters");
    } else if (!formData.gender.trim()) {
      valid = false;
      showNotification("error", "Please Select a gender type");
    } else if (!formData.email.trim()) {
      valid = false;
      showNotification("error", "Email is required");
    } else if (!emailRegex.test(formData.email.trim())) {
      valid = false;
      showNotification("error", "Email is not valid");
    } else if (!formData.phone.trim()) {
      valid = false;
      showNotification("error", "Phone number is required");
    } else if (!formData.division.trim()) {
      valid = false;
      showNotification("error", "Please Select a division");
    } else if (!formData.district.trim()) {
      valid = false;
      showNotification("error", "Please Select a district");
    } else if (!formData.upazila.trim()) {
      valid = false;
      showNotification("error", "Please Select a upazila");
    } else if (!formData.union.trim()) {
      valid = false;
      showNotification("error", "Please Select a tution area");
    } else if (!formData.preferredArea.trim()) {
      valid = false;
      showNotification("error", "Please Select a preffered area");
    } else if (!formData.password.trim()) {
      valid = false;
      showNotification("error", "Password is required");
    } else if (formData.password.length < 6) {
      valid = false;
      showNotification("error", "Password is must be 6 character");
    } else if (!formData.confirmPassword.trim()) {
      valid = false;
      showNotification("error", "Confirm Password is required");
    } else if (formData.confirmPassword.trim() !== formData.password.trim()) {
      valid = false;
      showNotification("error", "Password dosen't match");
    } else {
      return valid;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form is valid. Submitting:", formData);

      // Add your actual submission logic here

      // Simulate a successful submission for demonstration purposes
      showNotification("success", "Registration successful!");
    }
  };

  return (
    <RegisterFormContainer>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={closeNotification}
        />
      )}
      {/* <Header>Register</Header> */}
      <RegisterForm onSubmit={handleSubmit}>
        <div>
          <FormLabel htmlFor="registerType">Register Type</FormLabel>
          <FormSelect
            id="registerType"
            name="registerType"
            options={registerTypeOptions}
            defaultValue={formData.registerType}
            onChange={(selectedOption) =>
              handleInputChange("registerType", selectedOption.value)
            }
          />

          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />

          <FormLabel htmlFor="gender">Gender</FormLabel>
          <FormSelect
            id="gender"
            name="gender"
            options={genderOptions}
            defaultValue={formData.gender}
            onChange={(selectedOption) =>
              handleInputChange("gender", selectedOption.value)
            }
          />

          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />

          <FormLabel htmlFor="phone">Phone</FormLabel>
          <FormInput
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />

          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
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
            defaultValue={formData.division}
          />

          <FormLabel htmlFor="district">Tuition District</FormLabel>
          <FormSelect
            id="district"
            name="district"
            options={districtOptions}
            onChange={handleDistrictChange}
            defaultValue={formData.district}
          />

          <FormLabel htmlFor="upazila">Tuition Upazila</FormLabel>
          <FormSelect
            id="upazila"
            name="upazila"
            options={upazilaOptions}
            onChange={handleUpazilaChange}
            defaultValue={formData.upazila}
          />

          <FormLabel htmlFor="union">Tuition Area</FormLabel>
          <FormSelect
            id="union"
            name="union"
            options={unionOptions}
            defaultValue={formData.union}
            onChange={(selectedOption) =>
              handleInputChange("union", selectedOption.label)
            }
          />

          <FormLabel htmlFor="preferredArea">Preferred Tuition Area</FormLabel>
          <FormSelect
            id="preferredArea"
            name="preferredArea"
            options={preferredAreaOptions}
            defaultValue={formData.preferredArea}
            onChange={(selectedOption) =>
              handleInputChange("preferredArea", selectedOption.label)
            }
          />

          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <FormInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
          />
        </div>

        <SubmitButton type="submit">Register</SubmitButton>
      </RegisterForm>
    </RegisterFormContainer>
  );
};

export default Register;
