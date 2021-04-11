import React, { useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import SelectItem from '../../Components/SelectItem'
import HeaderText from '../../Components/HeaderText'
import NewsItem from '../../Components/NewsItem'




const NewsData = [
    {
        id:1,
        date:"24-july-2021",
        headline:"SCHOOL REOPENS",
        text:"School to be reopens for first August",

    },
    {
        id:1,
        date:"24-july-2021",
        headline:"SCHOOL REOPENS",
        text:"School to be reopens for first August",
    },
    {
        id:1,
        date:"24-july-2021",
        headline:"SCHOOL REOPENS",
        text:"School to be reopens for first August",
    },
    {
        id:1,
        date:"24-july-2021",
        headline:"SCHOOL REOPENS",
        text:"School to be reopens for first August",
    },
    {
        id:1,
        date:"24-july-2021",
        headline:"SCHOOL REOPENS",
        text:"School to be reopens for first August",
    },
]






const News = (props) => {

    const [data, setdata] = useState(NewsData)


    // const [state,setState] = useState({
    //     location:"",
    //     degree:""
    // })
    




    return (
        <>
            <Header />
            <div className="admission">
                <div className="admission-title">
                    <HeaderText
                        headingLeft="Latest"
                        headingRight="News"
                        paragraph="All the related news in one banner"
                    />
                </div>
              
                <div style={{ width: '80%', margin: 'auto', flexDirection: 'row', display: 'flex', flexWrap: 'wrap' }}>

                    {data.length ? data.map((university) => { return <NewsItem {...university} /> }) : "No Admissions found!"}
                </div>









            </div>
            <Footer />
        </>
    )
}
export default News