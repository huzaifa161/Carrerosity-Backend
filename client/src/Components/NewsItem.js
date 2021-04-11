import React from 'react'
import { Link } from 'react-router-dom'




const NewsItem = (props) => {
    const   {
        date,
        headline,
        text,id
    } = props
    return(
        <div style={{width:'30%',}}>
            <Link to={`/news/${id}`}>
            <div className="UniversityItem">        
                <div className="UniversityItem_img">
                    <img src={require("./image3.jpg").default} alt="image3"/>
                </div>
                <div className="UniversityItem_text">
                    <h6>
                       {date}
                    </h6>
                    <h3>
                        {headline}
                    </h3>
                    <h6>
                        {text}
                    </h6>

                </div>  
        </div>
        </Link>
        </div>
    )
}



export default NewsItem