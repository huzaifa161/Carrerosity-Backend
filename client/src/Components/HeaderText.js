import React from 'react'
import { Link } from 'react-router-dom'


const HeaderText = (props) => {
const {headingLeft,headingRight,paragraph,buttonText,rtl,onClickButton} = props
    return(
        <div className="HeaderText">
            <div className="HT-Heading">
               <h3><span style={!rtl?{color:'black'}:{}}> {headingLeft}</span> <span style={rtl&&{color:'black'}}>{headingRight}</span></h3> 
            </div>
            <div className="HT-Paragraph">
                <p>{paragraph}</p>
            </div>
            {
            buttonText &&
                <div className="HT-Button">
                   <Link to={onClickButton}> <button>{buttonText}</button></Link>
                </div>
            }
        </div>
    )
}

export default HeaderText