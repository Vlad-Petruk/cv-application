import { useState } from "react";
import Input from "../Reusable Componets/Input";
import Button from "../Reusable Componets/Button";
import InstitutionCard from "../Reusable Componets/InstitutionCard";
// in article Thinking in React are usefull information about passing the data upwards (step 5)
function InputBox ({handleClick, school, degree, startDate, endDate, location}) {
    return (
        <div className="input-box">
            <Input type={'text'} id ={'school'} label={'School'} value={school}/>
            <Input type={'text'} id ={'degree'} label={'Degree'} value={degree}/>
            <Input type={'number'} id ={'startDate'} label={'Start date'} value={startDate}/>
            <Input type={'number'} id ={'endDate'} label={'End date'} value={endDate}/>
            <Input type={'text'} id ={'location'} label={'Location'} value={location}/>
            <div className="buttons edu-btn">
                <Button text={'Delete'} />
                <Button text={'Save'} handleClick={handleClick}/>
            </div>
        </div>
    )
}

function EducationInput ({educations}) {
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
        {educations.map(education => (
            boxOpened[education.key] ? (
                <InputBox key={education.key} handleClick={handleClickSave} school={education.school} degree={education.degree} startDate={education.startDate} endDate={education.endDate} location={education.location}/>
            ) : (
                <InstitutionCard key={education.key} text={education.school} handleClick={() => handleClick(education.key)}/>
            )
        ))}
        </>
    )
}

export default EducationInput