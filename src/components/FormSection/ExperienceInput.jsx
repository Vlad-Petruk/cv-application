import { useState } from "react";
import Input from "../Reusable Componets/Input";
import Button from "../Reusable Componets/Button";
import InstitutionCard from "../Reusable Componets/InstitutionCard";
// in article Thinking in React are usefull information about passing the data upwards (step 5)
function InputBox ({handleClick, experience, updateExperience}) {
    return (
        <div className="input-box">
            <Input type={'text'} id ={'company'} label={'Company'} value={experience.company} onChange={(value) => {updateExperience(value, experience.posTitle, experience.startDate, experience.endDate, experience.location, experience.descr)}}/>

            <Input type={'text'} id ={'positionTitle'} label={'Position Title'} value={experience.posTitle} onChange={(value) => {updateExperience(experience.company, value, experience.startDate, experience.endDate, experience.location, experience.descr)}}/>

            <Input type={'number'} id ={'startDate'} label={'Start date'} value={experience.startDate} onChange={(value) => {updateExperience(experience.company, experience.posTitle, value, experience.endDate, experience.location, experience.descr)}}/>

            <Input type={'number'} id ={'endDate'} label={'End date'} value={experience.endDate} onChange={(value) => {updateExperience(experience.company, experience.posTitle, experience.startDate, value, experience.location, experience.descr)}}/>

            <Input type={'text'} id ={'location'} label={'Location'} value={experience.location} onChange={(value) => {updateExperience(experience.company, experience.posTitle, experience.startDate, experience.endDate, value, experience.descr)}}/>

            <Input type={'text'} id ={'description'} label={'Description'} value={experience.descr} onChange={(value) => {updateExperience(experience.company, experience.posTitle, experience.startDate, experience.endDate, experience.location, value)}}/>

            <div className="buttons edu-btn">
                <Button text={'Delete'} />
                <Button text={'Save'} handleClick={handleClick}/>
            </div>
        </div>
    )
}

function ExperienceInput ({experiences, updateExperience}) {
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
            <Button text={'+ Experience'} />
        </div>
        {experiences.map(experience => (
            boxOpened[experience.key] ? (
                <InputBox key={experience.key} handleClick={handleClickSave} experience={experience} updateExperience={(company, posTitle, startDate, endDate, location, descr) => updateExperience(experience, company, posTitle, startDate, endDate, location, descr)} />
            ) : (
                <InstitutionCard key={experience.key} text={experience.company} handleClick={() => handleClick(experience.key)}/>
            )
        ))}
        </>
    )
}

export default ExperienceInput