import './ReusableContent.css'

function Input ({type, id, label}) {
    return (
        <div className='inputBox'> 
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} className='input'></input>
        </div>
    )
}

export default Input