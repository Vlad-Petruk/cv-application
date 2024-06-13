import { useState } from 'react'
import data from './data/cv'
import CVPreview from './components/CVPreviewSection/ShowSection'
import FormMainSection from './components/FormSection/FormMainSection'
import './App.css'

function App() {

  return (
    <>
      <div className="form-section">
        <FormMainSection />
      </div>
      <div className="cv-preview">
        <CVPreview userFullName = {data.personal_info.name} email = {data.personal_info.email} tel = {data.personal_info.phone} address ={data.personal_info.address} educations={data.education} experience={data.professional_experience} />
      </div>
      
    </>
  )
}

export default App
