import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header';

const ScholarshipItem = (props) => {
    const {heading} = props
    return( 
        <div className="ScholarShip_Item_element">
            
    <a href="#" className="ScholarshipItem">
        <h3>{heading}</h3>
    </a>
    </div>
    )
}
const Scholarshipdetails = (props) => {
    return (
        <>
        <Header />
        <div className="Scholarshipdetails">
        <ScholarshipItem  heading="US Grads Scholarship Deadline 24-March-2020"/>
        <ScholarshipItem  heading="US Grads Scholarship Deadline 24-March-2020"/>
        <ScholarshipItem  heading="US Grads Scholarship Deadline 24-March-2020"/>
        <ScholarshipItem  heading="US Grads Scholarship Deadline 24-March-2020"/>
        <ScholarshipItem  heading="US Grads Scholarship Deadline 24-March-2020"/>
        <ScholarshipItem  heading="US Grads Scholarship Deadline 24-March-2020"/>
    <ScholarshipItem  heading="US Grads Scholarship Deadline 24-March-2020"/>
        
        </div>
        <Footer/>
        </>
    )
}
export default Scholarshipdetails;