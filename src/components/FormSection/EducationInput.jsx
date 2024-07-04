import { useState } from "react";
import Input from "../Reusable Componets/Input";
import Button from "../Reusable Componets/Button";
import InstitutionCard from "../Reusable Componets/InstitutionCard";
import NewEducationInput from "./NewEducationInput";

function InputBox ({handleClick, deleteEducation, education, updateEducation}) {
    return (
        <div className="input-box">
            <Input type={'text'} id ={'school'} label={'School'} value={education.school} onChange={(value) => {updateEducation(value, education.degree, education.startDate, education.endDate, education.location)}}/>

            <Input type={'text'} id ={'degree'} label={'Degree'} value={education.degree} onChange={(value) => updateEducation(education.school, value, education.startDate, education.endDate, education.location)}/>

            <Input type={'number'} id ={'startDate'} label={'Start date'} value={education.startDate} onChange={(value) => updateEducation(education.school, education.degree, value, education.endDate, education.location)}/>

            <Input type={'number'} id ={'endDate'} label={'End date'} value={education.endDate}onChange={(value) => updateEducation(education.school, education.degree, education.startDate, value, education.location)}/>

            <Input type={'text'} id ={'location'} label={'Location'} value={education.location}onChange={(value) => updateEducation(education.school, education.degree, education.startDate, education.endDate, value)}/>

            <div className="buttons edu-btn">
                <Button text={'Delete'} handleClick={deleteEducation} />
                <Button text={'Save'} handleClick={handleClick}/>
            </div>
        </div>
    )
}

function EducationInput ({educations, addEducation, updateEducation, deleteEducation}) {
    const [boxOpened, setBoxOpened] = useState(false);
    const [newInput, setNewInput] = useState(false)
    function handleClick (id){
        setBoxOpened(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    function handleClickSave () {
        setBoxOpened(prevState => !prevState)
    }

        
    return (
        <>
        <div className="add-btn">
            <Button text={'+ Education'} handleClick={setNewInput}/>
        </div>
        {newInput&& <NewEducationInput addEducation={addEducation} handleStateClick={setNewInput}/>}
        {educations.map(education => (
            boxOpened[education.key] ? (
                <InputBox key={education.key} handleClick={handleClickSave} education={education} updateEducation={(school, degree, startDate, endDate, location) => updateEducation(education, school, degree, startDate, endDate, location)} deleteEducation={() => deleteEducation(education)} />
            ) : (
                <InstitutionCard key={education.key} text={education.school} handleClick={() => handleClick(education.key)}/>
            )
        ))}
        </>
    )
}

export default EducationInput