import React from 'react'

const ScholarShipComponent = (props) =>{
    const {heading,id} = props
    return (
        <div>
            <a href={`/scholarship_overview?id=${id}`} className="ScholarShipComponent" 
            style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/image1.jpg'})`}} >
                <h3>{heading}</h3>
            </a>

        </div>
    )
}

export default ScholarShipComponent