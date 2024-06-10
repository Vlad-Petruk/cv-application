import Header from "../Reusable Componets/Header";
import {Icon} from '@mdi/react';
import { mdiEmail, mdiPhone, mdiMapMarker} from '@mdi/js';
import './ShowSection.css'

function CVPreview ({userFullName, email, tel, address}) {
    return (
        <div className="personal-info">
            <Header className="h2" text={userFullName}/>
            <div className="contact-box">
                <div className="personal-details-show-2">
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
        </div>
    )
}

export default CVPreview