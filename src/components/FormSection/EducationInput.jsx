import Input from "../Reusable Componets/Input";
import Button from "../Reusable Componets/Button";
import InstitutionCard from "../Reusable Componets/InstitutionCard";
import data from "../../data/cv";
// in article Thinking in React are usefull information about passing the data upwards (step 5)
function EducationInput () {
        
    return (
        <>
        {data.education.map(education => (
            <InstitutionCard key={education.key} text={education.school} />
        ))}
        </>
    )
}

export default EducationInput