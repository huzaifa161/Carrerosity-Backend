import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import HeaderText from '../../Components/HeaderText'
import axios from 'axios';
import moment from 'moment';



const News = (props) => {

    const [news, setNews] = useState([]);


    useEffect(() => {
        fetchNews();
    }, [])
    
    const fetchNews = async () => {
        try {
            const res = await axios.get(`news`);
            if (res?.data?.statusCode === 200) {
                setNews(res?.data?.Data);
            }
        } catch (err) {
            
        }
    }
    return (
        <>
            <Header />
            <div className="admission" style={{minHeight:'200px'}}>
                <div className="admission-title">
                    <HeaderText
                        headingLeft="Latest"
                        headingRight="News"
                        paragraph="All the related news in one banner"
                    />
                </div>
            </div>
            <div className="news-container">
                {news?.map((n, ind) => (
                    <a className="news-item">
                        <img className="news-image" src={n?.image1} />
                        <div>
                            <div className="news-title">{ n?.title}</div>
                            <div className="news-date">{ moment(n?.createdAt).format('MMMM Do YYYY')}</div>
                        </div>
                    </a>
                ))}
            </div>
            <Footer />
        </>
    )
}
export default News