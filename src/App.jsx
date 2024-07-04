import { useState } from "react";
import data from "./data/cv";
import CVPreview from "./components/CVPreviewSection/ShowSection";
import FormMainSection from "./components/FormSection/FormMainSection";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [name, setName] = useState(data.personal_info.name);
  const [email, setEmail] = useState(data.personal_info.email);
  const [phone, setPhone] = useState(data.personal_info.phone);
  const [adress, setAdress] = useState(data.personal_info.address);

  const [educations, setEducations] = useState(data.education);

  const [experiences, setExperiences] = useState(data.professional_experience);

  function addEducation(school, degree, startDate, endDate, location) {
    let newEducations = [...educations];
    newEducations.push({
      key: uuidv4(),
      school: school,
      degree: degree,
      startDate: startDate,
      endDate: endDate,
      location: location,
    });
    setEducations(newEducations);
  }

  function deleteEducation(education) {
    let newEducations = educations.filter((edu) => edu.key !== education.key);
    setEducations(newEducations);
  }

  function updateEducation(
    updatedEducation,
    school,
    degree,
    startDate,
    endDate,
    location
  ) {
    let newEducations = educations.map((education) =>
      education.key === updatedEducation.key
        ? { ...education, school, degree, startDate, endDate, location }
        : education
    );
    setEducations(newEducations);
  }

  function addExperience(
    company,
    posTitle,
    startDate,
    endDate,
    location,
    descr
  ) {
    let newExperiences = [...experiences];
    newExperiences.push({
      key: uuidv4(),
      company: company,
      posTitle: posTitle,
      startDate: startDate,
      endDate: endDate,
      location: location,
      descr: descr,
    });
    setExperiences(newExperiences);
  }

  function deleteExperience(experience) {
    let newExperiences = experiences.filter(
      (exp) => exp.key !== experience.key
    );
    setExperiences(newExperiences);
  }

  function updateExperience(
    updatedExperience,
    company,
    posTitle,
    startDate,
    endDate,
    location,
    descr
  ) {
    let newExperiences = experiences.map((experience) =>
      experience.key === updatedExperience.key
        ? {
            ...experience,
            company,
            posTitle,
            startDate,
            endDate,
            location,
            descr,
          }
        : experience
    );
    setExperiences(newExperiences);
  }

  function onClear() {
    setName("");
    setEmail("");
    setPhone("");
    setAdress("");
    setEducations([]);
    setExperiences([]);
  }

  function onLoad() {
    setName(data.personal_info.name);
    setEmail(data.personal_info.email);
    setPhone(data.personal_info.phone);
    setAdress(data.personal_info.address);
    setEducations(data.education);
    setExperiences(data.professional_experience);
  }

  return (
    <>
      <div className="form-section">
        <FormMainSection
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          adress={adress}
          setAdress={setAdress}
          onClear={onClear}
          onLoad={onLoad}
          educations={educations}
          addEducation={addEducation}
          updateEducation={updateEducation}
          deleteEducation={deleteEducation}
          experiences={experiences}
          addExperience={addExperience}
          updateExperience={updateExperience}
          deleteExperience={deleteExperience}
        />
      </div>
      <div className="cv-preview">
        <CVPreview
          name={name}
          email={email}
          tel={phone}
          address={adress}
          educations={educations}
          experience={experiences}
        />
      </div>
    </>
  );
}

export default App;
