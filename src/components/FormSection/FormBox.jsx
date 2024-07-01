import { useState } from "react"
import Card from "../Reusable Componets/Card"
import {mdiChevronLeft, mdiChevronDown} from '@mdi/js';
import PersonalDetailsInput from "./PersonalDetailsInput";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";

function FormBox ({boxHeader, icon, box, name, setName, email, setEmail, phone, setPhone, adress, setAdress}) {
    const [boxOpened, setBoxOpened] = useState(true)
    function handleClick (){
        setBoxOpened(prevState => !prevState)
    }

    //need pass data here from sections then pass it forward to form main section, and theen pass it to app.jsx and create state there(one state for two parts of program)
    function renderBoxContent() {
        switch (box) {
            case 'personalDetails':
                return <PersonalDetailsInput name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} adress={adress} setAdress={setAdress}/>;
            case 'education':
                return <EducationInput />;
            case 'experience':
                return <ExperienceInput />;
            default:
                return null;
        }
    }
    return (
        <>
            {boxOpened ? (
                <Card boxHeader={boxHeader} icon={icon} chevronIcon = {mdiChevronLeft} handleClick={handleClick} />
            ) : (
                <div className='card-opened'> 
                    <Card boxHeader={boxHeader} icon={icon} chevronIcon = {mdiChevronDown} handleClick={handleClick} />
                    {renderBoxContent()}
                </div> 
                
            )}  
        </> 
    )
}

export default FormBox