import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import HeaderText from '../../Components/HeaderText'

import axios from 'axios';
import moment from 'moment';
const UniversityDetails = (props) => {

    const [details, setDetails] = useState({});
    useEffect(() => {

        const id = props?.match?.params?.id;
        if (id) fetchUniversityDetails(id);

    },[]);


    const fetchUniversityDetails = async (id) => {
        try {
            const res = await axios.get(`${id}`);
            if (res.data.statusCode == 200) {
                setDetails(res.data?.Data)
            }
            
        } catch (err) {
            
        }
    }
    return (
        <>
            <Header />
            <div className="details-container">
                <h4 className="heading-secondary">Overview</h4>
                <p>{details?.overview}</p>
                <h4 className="heading-secondary">General Information</h4>
                <div className="d-flex">
                    <div>
                        <div><strong>City</strong></div>
                        <div>Karachi</div>
                    </div>
                    <div>
                        <div><strong>Examination Type</strong></div>
                        <div>{details?.examinationType}</div>
                    </div>
                    <div>
                        <div><strong>Campuses</strong></div>
                        <div>Karachi</div>
                    </div>
                </div>
                <h4 className="heading-secondary">Admission</h4>
                {details.admission
                    ?
                    <div className="admission-details">
                        <p>{details?.title}</p>
                        <div className="detail-row">
                            <div className="key">Announced Date</div>
                            <div className="value">{details?.admission.createdAt ? moment(details?.admission.createdAt).format("MMMM Do YYYY") : null}</div>
                        </div>
                        <div className="detail-row">
                            <div className="key">Last Date</div>
                            <div className="value">{details?.admission?.lastDate ? moment(details?.admission?.lastDate).format("MMMM Do YYYY") : null}</div>
                        </div>
                        <div className="detail-row">
                            <div className="key">Availabe Programs</div>
                            <div className="value">
                                {details?.admission?.programTypes?.map((pType, index) => (<div key={index}>{pType}</div>))}
                            </div>
                        </div>
                    </div>
                    : <div>Admissions are Off</div>}
                <h4 className="heading-secondary">Scholarships</h4>
                {details.scholarship
                    ?
                    <div className="admission-details">
                        <p>{details?.title}</p>
                        <div className="detail-row">
                            <div className="key">Announced Date</div>
                            <div className="value">{details?.scholarship.createdAt ? moment(details?.scholarship.createdAt).format("MMMM Do YYYY") : null}</div>
                        </div>
                        <div className="detail-row">
                            <div className="key">Deadline</div>
                            <div className="value">{details?.scholarship?.deadline ? moment(details?.scholarship?.deadline).format("MMMM Do YYYY") : null}</div>
                        </div>
                        <div className="detail-row">
                            <div className="key">Availabe Programs</div>
                            <div className="value">
                                {details?.scholarship?.programTypes?.map((pType, index) => (<div key={index}>{pType}</div>))}
                            </div>
                        </div>
                    </div>
                    : <div>Currently Not Available</div>}
                <h4 className="heading-secondary">Campus Facilities</h4>
                <div className="campus-facilities">
                    {details?.campusFacilities?.map((campusFacility, index) => campusFacility === '$init' ? null : <div key={index}>{campusFacility}</div> )}
                </div>


            </div>
            <Footer/>
        </> 
    )
}
export default UniversityDetails;