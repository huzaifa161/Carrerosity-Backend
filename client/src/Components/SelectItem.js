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
                <select onChange={(event)=>props?.selectItem(event) } placeholder={placeholder} value={value}>
                    <option selected disabled >{placeholder}</option>
                    {
                        props.data?.map(item=>{
                            return <option key={ item._id} value={item._id}>{item.title}</option>
                        })
                    }
                
                </select>
            </div>
        </div>
    )
}
export default SelectItem