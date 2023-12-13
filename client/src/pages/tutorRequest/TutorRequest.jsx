import React, { useState } from "react";
import { mediumData } from "../../data/medium";
import { classData, mediumClassMapping } from "../../data/class";
import division from "../../data/division";
import district from "../../data/district";
import upazila from "../../data/upazila";
import unions from "../../data/unions";
import Notification from "../../components/notification/Notification";
import {
  TutorRequestFormContainer,
  Header,
  ParagaraphText,
  TutorRequestForm,
  FormLabel,
  FormInput,
  FormSelect,
  SubmitButton,
} from "./tutorrequestPageStyles";

const TutorRequest = () => {
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedUpazila, setSelectedUpazila] = useState(null);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [upazilaOptions, setUpazilaOptions] = useState([]);
  const [unionOptions, setUnionOptions] = useState([]);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    medium: "",
    class: "",
    division: "",
    district: "",
    upazila: "",
    union: "",
  });
  const [selectedMedium, setSelectedMedium] = useState("");
  const [availableClasses, setAvailableClasses] = useState([]);

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
  };

  const handleMediumChange = (selectedValue) => {
    setSelectedMedium(selectedValue.value);
    setFormData((prevData) => ({
      ...prevData,
      medium: selectedValue.label,
    }));
    setAvailableClasses(mediumClassMapping[selectedValue.value] || []);
  };
  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

  const closeNotification = () => {
    setNotification(null);
  };
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;

    if (!formData.name.trim()) {
      valid = false;
      showNotification("error", "Name is required");
    } else if (formData.name.length < 3) {
      valid = false;
      showNotification("error", "Name at least 3 characters");
    } else if (!formData.phone.trim()) {
      valid = false;
      showNotification("error", "Phone number is required");
    } else if (!formData.medium.trim()) {
      valid = false;
      showNotification("error", "Please Select a medium");
    } else if (!formData.class.trim()) {
      valid = false;
      showNotification("error", "Please Select a class");
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
    } else {
      return valid;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form is valid. Submitting:", formData);

      // Add your actual submission logic here

      // Simulate a successful submission for demonstration purposes
      showNotification("success", "Tutor Request successful!");
    }
  };
  return (
    <TutorRequestFormContainer>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={closeNotification}
        />
      )}
      <Header>আপনি কি টিউটর খুঁজছেন? </Header>
      <ParagaraphText>
        তাহলে ফর্মটি পূরণ করে জানান আপনি কোন ক্লাস/এরিয়ার জন্য টিউটর খুঁজছেন।
        ফর্ম পূরণ করে সাবমিট করার পরবর্তী ২৪ ঘন্টার মধ্যে আমাদের একজন প্রতিনিধি
        আপনার দেওয়া মোবাইল নাম্বারে যোগাযোগ করবেন।
      </ParagaraphText>

      <TutorRequestForm onSubmit={handleFormSubmit}>
        <div>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />

          <FormLabel htmlFor="phone">Phone</FormLabel>
          <FormInput
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
          <FormLabel htmlFor="union">Select Medium</FormLabel>
          <FormSelect
            id="medium"
            name="medium"
            options={mediumData}
            defaultValue={formData.medium}
            onChange={handleMediumChange}
          />
          <FormLabel htmlFor="union">Select class</FormLabel>
          <FormSelect
            id="class"
            name="class"
            defaultValue={formData.class}
            options={classData
              .filter((cls) => availableClasses.includes(cls.id))
              .map((cls) => ({ value: cls.id, label: cls.name }))}
            onChange={(selectedValue) => {
              handleInputChange("class", selectedValue.label);
            }}
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
        </div>

        <SubmitButton type="submit">Submit</SubmitButton>
      </TutorRequestForm>
    </TutorRequestFormContainer>
  );
};

export default TutorRequest;
