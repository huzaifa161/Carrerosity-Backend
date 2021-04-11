import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import HeaderText from '../../Components/HeaderText'
import { useParams } from 'react-router'

import dawood from '../../Components/image3.jpg';





const UniversityData = [
    {
        id:1,
        url:"duet.edu.pk",
        email:"admin@duet.edu.pk",
        city_id:2,
        course_id:1,
        overview:"The Dawood University of Engineering and Technology is a public university located in Karachi, Sindh, Pakistan. It was established by Dawood Foundation and is named after Seth Ahmed Dawood.",
        date:"03-August-2021",
        name:"Institute of Space and Technology",
        address:"asd asd asda asdasd",
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14478.266188884572!2d67.0476991!3d24.8786496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91470c3fcf684239!2sDawood%20University%20Of%20Engineering%20%26%20Technology%20Karachi!5e0!3m2!1sen!2s!4v1617574939198!5m2!1sen!2s"
    },
    {
        id:2,
        url:"duet.edu.pk",
        email:"admin@duet.edu.pk",
        city_id:1,
        overview:"The Dawood University of Engineering and Technology is a public university located in Karachi, Sindh, Pakistan. It was established by Dawood Foundation and is named after Seth Ahmed Dawood.",
         course_id:1,
        date:"22-September-2021",
        name:"Dawood UET",
         address:"asd asd asda asdasd",
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14478.266188884572!2d67.0476991!3d24.8786496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91470c3fcf684239!2sDawood%20University%20Of%20Engineering%20%26%20Technology%20Karachi!5e0!3m2!1sen!2s!4v1617574939198!5m2!1sen!2s"
    },
    {
        id:3,
        url:"duet.edu.pk",
        email:"admin@duet.edu.pk",
        city_id:1,
        course_id:1,
        date:"23-October-2021",
        name:"PAF_KIET",
         address:"asd asd asda asdasd",
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14478.266188884572!2d67.0476991!3d24.8786496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91470c3fcf684239!2sDawood%20University%20Of%20Engineering%20%26%20Technology%20Karachi!5e0!3m2!1sen!2s!4v1617574939198!5m2!1sen!2s"
    },
    {
        id:4,
        url:"duet.edu.pk",
        email:"admin@duet.edu.pk",
        city_id:1,
        course_id:2,
        date:"03-August-2021",
        name:"Islamia College Karachi",
         address:"asd asd asda asdasd",
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14478.266188884572!2d67.0476991!3d24.8786496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91470c3fcf684239!2sDawood%20University%20Of%20Engineering%20%26%20Technology%20Karachi!5e0!3m2!1sen!2s!4v1617574939198!5m2!1sen!2s"
    },
    {
        id:5,
        url:"duet.edu.pk",
        email:"admin@duet.edu.pk",
        city_id:1,
        course_id:2,
        date:"03-July-2021",
        name:"Delhi College",
         address:"asd asd asda asdasd",
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14478.266188884572!2d67.0476991!3d24.8786496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91470c3fcf684239!2sDawood%20University%20Of%20Engineering%20%26%20Technology%20Karachi!5e0!3m2!1sen!2s!4v1617574939198!5m2!1sen!2s"
    },
]



const University = (props) => {
    const id = window.location.pathname.split("/university/")[1]


    const data = UniversityData.find(item=>item.id==id)
    return(
        <>
        <Header />
        <div  className="university" >
            {/* <div style={{width:'100%',textAlign:'center',paddingTop:30}}>
            <h2 style={{color:'#b32137',fontSize:'40px',fontWeight:900}}>
            {data?.name}
            </h2>
            <h5>
                {data?.address}
            </h5>
            <h5>
                {data?.email}
            </h5>
            
            <h5>
                {data?.url}
            </h5>
            </div> */}
       
        
            {!data?<div style={{textAlign:'center'}}>NO RECORDS FOUND</div>:(
        <div className="university_inner">
           
            <div className="university_inner_left">
                <div style={{width:'80%',margin:'auto'}}>
                    <HeaderText
                    headingLeft="Overview about"
                    headingRight={data?.name}
                    paragraph={data?.overview}
                    buttonText="Apply Now"
                    />
                </div>  
            </div>
            <div className="university_inner_right">
            <iframe
                src={data?.src}
                width="100%"
                height="400px"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
            </div>
        </div>
            )}
        </div>
{/*         
        <div className="University_admissions">
            <h1>
                Admissions Open
            </h1>
           <a href="http://www.gomal.pk/admissions/UserMessage.aspx" target="_blank">
           <button>Apply now</button>
            </a> 

        </div> */}
    
        <Footer />
        </>
    )
}

export default University