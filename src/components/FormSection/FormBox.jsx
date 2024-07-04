import { useState } from "react";
import Card from "../Reusable Componets/Card";
import { mdiChevronLeft, mdiChevronDown } from "@mdi/js";
import PersonalDetailsInput from "./PersonalDetailsInput";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";

function FormBox({
  boxHeader,
  icon,
  box,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  adress,
  setAdress,
  educations,
  addEducation,
  updateEducation,
  deleteEducation,
  experiences,
  addExperience,
  updateExperience,
  deleteExperience,
}) {
  const [boxOpened, setBoxOpened] = useState(true);
  function handleClick() {
    setBoxOpened((prevState) => !prevState);
  }

  function renderBoxContent() {
    switch (box) {
      case "personalDetails":
        return (
          <PersonalDetailsInput
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            adress={adress}
            setAdress={setAdress}
          />
        );
      case "education":
        return (
          <EducationInput
            educations={educations}
            addEducation={addEducation}
            updateEducation={updateEducation}
            deleteEducation={deleteEducation}
          />
        );
      case "experience":
        return (
          <ExperienceInput
            experiences={experiences}
            addExperience={addExperience}
            updateExperience={updateExperience}
            deleteExperience={deleteExperience}
          />
        );
      default:
        return null;
    }
  }
  return (
    <>
      {boxOpened ? (
        <Card
          boxHeader={boxHeader}
          icon={icon}
          chevronIcon={mdiChevronLeft}
          handleClick={handleClick}
        />
      ) : (
        <div className="card-opened">
          <Card
            boxHeader={boxHeader}
            icon={icon}
            chevronIcon={mdiChevronDown}
            handleClick={handleClick}
          />
          {renderBoxContent()}
        </div>
      )}
    </>
  );
}

export default FormBox;
