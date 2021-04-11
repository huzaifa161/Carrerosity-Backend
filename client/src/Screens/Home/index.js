import React from 'react'

import { faCoffee,faSatelliteDish,faNewspaper } from '@fortawesome/free-solid-svg-icons'

import CarasoulComponent from '../../Components/Carasoul'
import Features from '../../Components/Features'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeaderText from '../../Components/HeaderText'
import ImageWithText from '../../Components/ImageWithText'

const Home = (props) => {
    return (
    
        <>
        <Header />
    <div >
        
        <CarasoulComponent/>
        <HeaderText 
            headingLeft="Compare" 
            headingRight="Universities" 
            paragraph="Narrow down your favourite institutes and compare them side by side with our built-in tools"
            buttonText="Continue" 
            onClickButton="compare"
         />



         <div style={{width:'80%',display:'flex',margin:'auto'}}>
         <ImageWithText 
            headingLeft="Information about"
            headingRight="Scholarships" 
            paragraph="All the available Scholarship under one flag so it will be easier to point out you interested one"
            buttonText="Continue" 
            onClickButton="scholarship"
            />
         </div>




         <Features 
            headingOne="All in one touch"
            headingTwo="Reliable"
            headingThree="Up to date information"
            paragraphOne="All the required data is available in just one click"
            paragraphTwo="This website ensures and authenticate all the data"
            paragraphThree="All the recent news are available here"
            iconOne={faCoffee}
            iconTwo={faNewspaper}
            iconThree={faSatelliteDish}
         />
         <HeaderText 
            headingLeft="Search for" 
            headingRight="Reviews" 
            paragraph="Select different institutes and find out what people have to say about it and choose the one which fits you the 
            best"
            buttonText="Continue" 
            onClickButton="review" 
         />
         <div style={{width:'80%',display:'flex',margin:'auto'}}>
            <ImageWithText 
               headingLeft="Open"
               headingRight="Admissions" 
               paragraph="All the available Scholarship under one flag so it will be easier to point out you interested one"
               buttonText="Continue" 
               onClickButton="admission"
            />
         </div>
    </div>
    
    <Footer/>
    </>
    )
}
export default Home