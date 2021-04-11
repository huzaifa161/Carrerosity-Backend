import React from 'react'



const InputWithTitle = props => {

    const { title, type, placeholder, onChange,value } = props
    return (
        <div className="inputWithTitle">
            <h3>
                {title}
        </h3>
            <input type={ type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )


}


export default InputWithTitle