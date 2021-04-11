import React from 'react'
import HeaderText from './HeaderText'


const ImageWithText = (props) =>{
    return(
        <div className="ImageWithText">
            <div className="IT-image">
                <img src={require("./image3.jpg").default} alt="image3"/>
            </div>
            <div className="IT-text">
            <HeaderText  {...props}/>
            </div>
        </div>
    )
}

export default ImageWithText