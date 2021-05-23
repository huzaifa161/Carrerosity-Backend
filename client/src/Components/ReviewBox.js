import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar,faSatelliteDish,faNewspaper } from '@fortawesome/free-solid-svg-icons'
import React from 'react'



const ReviewBox = (props) => {
    return(
        <div className="reviewBox">
          
           
            <h3>Muhammad Abdullah</h3>
            {props.stars.map(star=>{  return <FontAwesomeIcon icon={faStar}  style={{color:'rgb(255, 208, 0)'}} />})}
            <h4>03-April-2021</h4>
            <h5>"Some very very good written here"</h5>
        </div>
    )
}


export default ReviewBox