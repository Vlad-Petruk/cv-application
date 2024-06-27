import Input from "../Reusable Componets/Input"
 

function PersonalDetailsInput ( ) {
    return (
        <div className="input-box">
            <Input type={'text'} id ={'fullName'} label={'Full name'}/>
            <Input type={'email'} id ={'email'} label={'Email'}/>
            <Input type={'number'} id ={'phoneNumber'} label={'Phone'}/>
            <Input type={'text'} id ={'address'} label={'Address'}/>
        </div>
    )
}

export default PersonalDetailsInput