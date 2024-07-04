import { useState } from "react";
import Input from "../Reusable Componets/Input";
import Button from "../Reusable Componets/Button";

function NewEducationInput({ addEducation, handleStateClick }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  function onSave() {
    addEducation(school, degree, startDate, endDate, location);
    handleStateClick();
  }

  return (
    <div className="input-box">
      <Input
        type={"text"}
        id={"school"}
        label={"School"}
        value={school}
        onChange={setSchool}
      />

      <Input
        type={"text"}
        id={"degree"}
        label={"Degree"}
        value={degree}
        onChange={setDegree}
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

      <div className="buttons edu-btn">
        <Button text={"Save"} handleClick={onSave} />
      </div>
    </div>
  );
}

export default NewEducationInput;
