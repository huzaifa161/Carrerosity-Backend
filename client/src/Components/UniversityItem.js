import React from 'react'
import { Link } from 'react-router-dom'




const UniversityItem = (props) => {
    const   {
        id,
        city_id,
        course_id,
        date,
        name,
    } = props
    return(
        <div style={{width:'30%',}}>
            <Link to={`/university/${id}`}>
            <div className="UniversityItem">        
                <div className="UniversityItem_img">
                    <img src={require("./image3.jpg").default} alt="image3"/>
                </div>
                <div className="UniversityItem_text">
                    <h6>
                       {date}
                    </h6>
                    <h3>
                        {name}
                    </h3>

                </div>  
        </div>
        </Link>
        </div>
    )
}



export default UniversityItem