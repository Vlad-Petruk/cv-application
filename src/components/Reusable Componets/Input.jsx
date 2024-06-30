import './ReusableContent.css'

function Input ({type, value, onChange, id, label}) {
    return (
        <div className='inputBox'> 
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} className='input' value={value} onChange={(e)=> onChange(e.target.value)}></input>
        </div>
    )
}

export default Input