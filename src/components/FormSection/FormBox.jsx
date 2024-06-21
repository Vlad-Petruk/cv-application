import { useState } from "react"
import Card from "../Reusable Componets/Card"
import {mdiChevronLeft, mdiChevronDown} from '@mdi/js';
import PersonalDetailsInput from "./PersonalDetailsInput";

function FormBox ({boxHeader, icon, box}) {
    const [boxOpened, setBoxOpened] = useState(true)
    function handleClick (){
        setBoxOpened(prevState => !prevState)
    }

    function renderBoxContent() {
        switch (box) {
            case 'personalDetails':
                return <PersonalDetailsInput />;
            // case 'contactDetails':
            //     return <ContactDetailsInput />;
            // case 'addressDetails':
            //     return <AddressDetailsInput />;
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