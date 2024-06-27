import { useState } from "react";
import Input from "../Reusable Componets/Input";
import Button from "../Reusable Componets/Button";
import InstitutionCard from "../Reusable Componets/InstitutionCard";
import data from "../../data/cv";
// in article Thinking in React are usefull information about passing the data upwards (step 5)
function InputBox ({handleClick}) {
    return (
        <div className="input-box">
            <Input type={'text'} id ={'school'} label={'School'}/>
            <Input type={'text'} id ={'degree'} label={'Degree'}/>
            <Input type={'number'} id ={'startDate'} label={'Start date'}/>
            <Input type={'number'} id ={'endDate'} label={'End date'}/>
            <Input type={'text'} id ={'location'} label={'Location'}/>
            <div className="buttons edu-btn">
                <Button text={'Delete'} />
                <Button text={'Save'} handleClick={handleClick}/>
            </div>
        </div>
    )
}

function EducationInput () {
    const [boxOpened, setBoxOpened] = useState(false)
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
            <Button text={'+ Education'} />
        </div>
        {data.education.map(education => (
            boxOpened[education.key] ? (
                <InputBox key={education.key} handleClick={handleClickSave}/>
            ) : (
                <InstitutionCard key={education.key} text={education.school} handleClick={() => handleClick(education.key)}/>
            )
        ))}
        </>
    )
}

export default EducationInput