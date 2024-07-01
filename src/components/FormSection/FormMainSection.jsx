import FormBox from './FormBox'
import Button from '../Reusable Componets/Button'
import './FormSection.css'
import {mdiAccount, mdiBriefcase, mdiSchool} from '@mdi/js';

function FormMainSection ({name, setName, email, setEmail, phone, setPhone, adress, setAdress, onClear, onLoad}) {
    return (
        <div className="main-container">
            <div className="buttons">
                <Button text={'Clear example'} handleClick={onClear} />
                <Button text={'Load example'} handleClick={onLoad}/>
            </div>
            <div className="form-boxes">
                {/* use State in boxes to define its content showing */}
                <FormBox boxHeader={'Personal Details'} box={'personalDetails'} icon={mdiAccount} name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} adress={adress} setAdress={setAdress}/>
                <FormBox boxHeader={'Education'} box={'education'} icon={mdiSchool}/>
                <FormBox boxHeader={'Experience'} box={'experience'} icon={mdiBriefcase}/>
            </div>
        </div>
    )
}

export default FormMainSection