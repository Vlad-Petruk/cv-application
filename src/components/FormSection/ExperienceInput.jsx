import { useState } from "react";
import Input from "../Reusable Componets/Input";
import Button from "../Reusable Componets/Button";
import InstitutionCard from "../Reusable Componets/InstitutionCard";
import data from "../../data/cv";
// in article Thinking in React are usefull information about passing the data upwards (step 5)
function InputBox ({handleClick}) {
    return (
        <div className="input-box">
            <Input type={'text'} id ={'company'} label={'Company'}/>
            <Input type={'text'} id ={'positionTitle'} label={'Position Title'}/>
            <Input type={'number'} id ={'startDate'} label={'Start date'}/>
            <Input type={'number'} id ={'endDate'} label={'End date'}/>
            <Input type={'text'} id ={'location'} label={'Location'}/>
            <Input type={'text'} id ={'description'} label={'Description'}/>
            <div className="buttons edu-btn">
                <Button text={'Delete'} />
                <Button text={'Save'} handleClick={handleClick}/>
            </div>
        </div>
    )
}

function ExperienceInput () {
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
        {data.professional_experience.map(experience => (
            boxOpened[experience.key] ? (
                <InputBox key={experience.key} handleClick={handleClickSave}/>
            ) : (
                <InstitutionCard key={experience.key} text={experience.company} handleClick={() => handleClick(experience.key)}/>
            )
        ))}
        </>
    )
}

export default ExperienceInput