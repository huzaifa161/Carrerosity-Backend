import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ReviewBox from '../../Components/ReviewBox'
import HeaderText from '../../Components/HeaderText'



const Reviews = (props) => {
    return(
        <>
        <Header />
        <div className="reviews">
        <HeaderText
                        headingLeft="Latest"
                        headingRight="Reviews"
                      
                    />
                <div className="reviews-Boxes">
                <ReviewBox stars={[{"w":"w"},{"w":"w"},{"w":"w"}]}/>
            <ReviewBox stars={[{"w":"w"},{"w":"w"},{"w":"w"}]}/>
            <ReviewBox stars={[{"w":"w"},{"w":"w"},{"w":"w"}]}/>
            <ReviewBox stars={[{"w":"w"},{"w":"w"},{"w":"w"}]}/>
            <ReviewBox stars={[{"w":"w"},{"w":"w"},{"w":"w"}]}/>
            <ReviewBox stars={[{"w":"w"},{"w":"w"},{"w":"w"}]}/>
            <ReviewBox stars={[{"w":"w"},{"w":"w"},{"w":"w"}]}/>
                </div>
        </div>
        <Footer />
        </>
    )
}


export default Reviews