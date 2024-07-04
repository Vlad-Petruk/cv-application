import { useState } from "react";
import Input from "../Reusable Componets/Input";
import Button from "../Reusable Componets/Button";

function NewExperienceInput({ addExperience, handleStateClick }) {
  const [company, setCompany] = useState("");
  const [posTitle, setPostitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [descr, setDescr] = useState("");

  function onSave() {
    addExperience(company, posTitle, startDate, endDate, location, descr);
    handleStateClick();
  }

  return (
    <div className="input-box">
      <Input
        type={"text"}
        id={"company"}
        label={"Company"}
        value={company}
        onChange={setCompany}
      />

      <Input
        type={"text"}
        id={"positionTitle"}
        label={"Position Title"}
        value={posTitle}
        onChange={setPostitle}
      />

      <Input
        type={"number"}
        id={"startDate"}
        label={"Start date"}
        value={startDate}
        onChange={setStartDate}
      />

      <Input
        type={"number"}
        id={"endDate"}
        label={"End date"}
        value={endDate}
        onChange={setEndDate}
      />

      <Input
        type={"text"}
        id={"location"}
        label={"Location"}
        value={location}
        onChange={setLocation}
      />

      <Input
        type={"text"}
        id={"description"}
        label={"Description"}
        value={descr}
        onChange={setDescr}
      />

      <div className="buttons edu-btn">
        <Button text={"Save"} handleClick={onSave} />
      </div>
    </div>
  );
}

export default NewExperienceInput;
