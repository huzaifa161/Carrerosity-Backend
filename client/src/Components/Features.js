import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Features =  (props) => {
    const {
        headingOne,paragraphOne,
        headingTwo,paragraphTwo,
        headingThree,paragraphThree,
        iconOne,iconTwo,iconThree
    }
    =props
    return(
    <div className="features">
        <div className="feature-header">

        </div>
        <div className="feature-boxes">
            <div className="feature-box">
                <div className="feature-icon">
                    <FontAwesomeIcon icon={iconOne} size="2x" />
                </div>
                <h4>{headingOne}</h4>
                <p>
                {paragraphOne}
                </p>
            </div>
            <div className="feature-box">
                <div className="feature-icon">
                    <FontAwesomeIcon icon={iconTwo} size="2x" />
                </div>
                <h4>{headingTwo}</h4>
                <p>
                    {paragraphTwo}
                </p>
            </div>
            <div className="feature-box">
                <div className="feature-icon">
                    <FontAwesomeIcon icon={iconThree} size="2x"/>
                </div>
                <h4>{headingThree}</h4>
                <p>
                  {paragraphThree}
                </p>
            </div>
        </div>
      
    </div>
    )
}


export default Features