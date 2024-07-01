import Header from "../Reusable Componets/Header";
import {Icon} from '@mdi/react';
import { mdiEmail, mdiPhone, mdiMapMarker} from '@mdi/js';
import ListEducationShow from "./EducationShow";
import ListExperienceShow from "./ExperienceShow";
import './ShowSection.css'


function CVPreview ({name, email, tel, address, educations, experience}) {
    return (
        <>
        <div className="personal-info">
            <Header className="header" text={name} level={1}/>
            <div className="contact-box">
                <div className="personal-details-div">
                    <Icon path={mdiEmail} size={1}/>
                    <p>{email}</p>
                </div>
                <div className="personal-details-div">
                    <Icon path={mdiPhone} size={1} />
                    <p>{tel}</p>
                </div>
                <div className="personal-details-div">
                    <Icon path={mdiMapMarker} size={1} />
                    <p>{address}</p>
                </div>
            </div>
        </div>

        <div className="educations">
            <ListEducationShow educations={educations}/>
        </div>

        <div className="experience">
            <ListExperienceShow experiences={experience} />
        </div>
        </>
    )
}

export default CVPreview