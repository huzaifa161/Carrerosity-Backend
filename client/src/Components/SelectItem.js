import React from 'react'


const SelectItem = props => {
    const {
        value,
        title,
        placeholder
    } = props
    return(
        <div className="SelectItem">
            <div className="SelectItem-Header">
                <h2>
                   {title}
                </h2>
            </div>
            <div className="SelectItem-Body">
                <select onChange={(val)=>props?.selectItem(val) } placeholder={placeholder} value={value}>
                    <option disabled selected >{placeholder}</option>
                    {
                        props.data?.map(item=>{
                          return  <option value={item.id}>{item.name}</option>
                        })
                    }
                
                </select>
            </div>
        </div>
    )
}
export default SelectItem