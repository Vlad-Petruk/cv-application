import FormBox from './FormBox'
import Button from '../Reusable Componets/Button'
import './FormSection.css'

function FormMainSection () {
    return (
        <div className="main-container">
            <div className="buttons">
                <Button text={'Clear example'} />
                <Button text={'Load example'} />
            </div>
            <div className="form-boxes">
                {/* use State in boxes to define its content showing */}
                <FormBox />
                <FormBox />
                <FormBox />
            </div>
        </div>
    )
}

export default FormMainSection