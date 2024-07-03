import { useState } from 'react'
import data from './data/cv'
import CVPreview from './components/CVPreviewSection/ShowSection'
import FormMainSection from './components/FormSection/FormMainSection'
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [name, setName] = useState(data.personal_info.name)
  const [email, setEmail] = useState(data.personal_info.email)
  const [phone, setPhone] = useState(data.personal_info.phone)
  const [adress, setAdress] = useState(data.personal_info.address)

  const [educations, setEducations] = useState(data.education)

  const [experiences, setExperiences] = useState(data.professional_experience);

  function addEducation(school, degree, startDate, endDate, location) {
    let newEducations = [...educations]
    newEducations.push({
      key: uuidv4,
      school: school,
      degree: degree,
      startDate: startDate,
      endDate: endDate,
      location: location,
    })
    setEducations(newEducations)
  }

  function updateEducation(updatedEducation, school, degree, startDate, endDate, location) {
    let newEducations = educations.map(education =>
        education.key === updatedEducation.key 
            ? { ...education, school, degree, startDate, endDate, location }
            : education
    );
    setEducations(newEducations);
}


  function onClear() {
    setName('')
    setEmail('')
    setPhone('')
    setAdress('')
    setEducations([])
    setExperiences([])
  }

  function onLoad() {
    setName(data.personal_info.name)
    setEmail(data.personal_info.email)
    setPhone(data.personal_info.phone)
    setAdress(data.personal_info.address)
    setEducations(data.education)
    setExperiences(data.professional_experience)
  }


  return (
    <>
      <div className="form-section">
        <FormMainSection name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} adress={adress} setAdress={setAdress} onClear={onClear} onLoad={onLoad} educations={educations} addEducation={addEducation} updateEducation={updateEducation}
        />
      </div>
      <div className="cv-preview">
        <CVPreview name = {name} email = {email} tel = {phone} address ={adress} educations={educations} experience={experiences} />
      </div>
      
    </>
  )
}

export default App
