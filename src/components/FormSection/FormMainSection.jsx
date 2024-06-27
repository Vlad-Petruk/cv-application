import FormBox from './FormBox'
import Button from '../Reusable Componets/Button'
import './FormSection.css'
import {mdiAccount, mdiBriefcase, mdiSchool} from '@mdi/js';

function FormMainSection () {
    return (
        <div className="main-container">
            <div className="buttons">
                <Button text={'Clear example'} />
                <Button text={'Load example'} />
            </div>
            <div className="form-boxes">
                {/* use State in boxes to define its content showing */}
                <FormBox boxHeader={'Personal Details'} box={'personalDetails'} icon={mdiAccount} />
                <FormBox boxHeader={'Education'} box={'education'} icon={mdiSchool}/>
                <FormBox boxHeader={'Experience'} box={'experience'} icon={mdiBriefcase}/>
            </div>
        </div>
    )
}

export default FormMainSection