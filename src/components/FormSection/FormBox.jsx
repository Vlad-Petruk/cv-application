import { useState } from "react"
import Card from "../Reusable Componets/Card"
import {mdiChevronLeft, mdiChevronDown} from '@mdi/js';

function FormBox ({boxHeader, icon}) {
    const [boxOpened, setBoxOpened] = useState(true)
    function handleClick (){
        setBoxOpened(prevState => !prevState)
    }
    return (
        <>
            {boxOpened ? (
                <Card boxHeader={boxHeader} icon={icon} chevronIcon = {mdiChevronLeft} handleClick={handleClick} />
            ) : (
                <div className='card-opened'> 
                    <Card boxHeader={boxHeader} icon={icon} chevronIcon = {mdiChevronDown} handleClick={handleClick} />
                    <input type="text" />
                </div> 
                
            )}  
        </> 
    )
}

export default FormBox