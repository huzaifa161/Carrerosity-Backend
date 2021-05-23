import React, { useState, useEffect } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeaderText from '../../Components/HeaderText'
import SelectItem from '../../Components/SelectItem'
import axios from 'axios';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
const ScholarShip = (props) => {
    const [programType, setProgramType] = useState('');
    const [programTypes, setProgramTypes] = useState([]);

    const [universities, setUniversities] = useState([]);

    
    useEffect(() => {
        fetchProgramTypes();
        fetchScholarshipUniversities();
    },[])

    const fetchProgramTypes = async () => {
        try {
            const res = await axios.get('program/programTypes');
            if (res?.data?.statusCode === 200) {
                setProgramTypes(res?.data?.Data);
            }
        } catch (err) {
            console.log('err',err)
        }
    }
    const fetchScholarshipUniversities = async (id = null) => {
        try {
            const programTypeId = id ? '/' + id : '';
            const res = await axios.get(`university/scholarships${programTypeId}`);
            if (res?.data?.statusCode === 200) {
                const universities = res?.data?.Data.map(uni => ({
                    ...uni, details: uni.programTypes.reduce((acc, currVal, ind) => {
                        return ind < uni?.programTypes?.length -1 ? (acc + currVal?.title + ', ') : (acc + ' and ' + currVal?.title)
                    },'For ')
                }));
                setUniversities(universities);
            }
        } catch (err) {
            console.log('err',err)
        }
    }

    const searchScholarships = async () => {
        if (!programType) return toast.warn('Please Select Program Type');
        await fetchScholarshipUniversities(programType)
    }


    return (
        <>
        <Header/>
    <div className="scholarship">
    <HeaderText
        headingLeft="Select "
        headingRight="Program Type"
        paragraph="Narrow down your favourite institutes and compare them side by side with our built-in tools"
                />
                <div className="admission-header">
                    <div style={{ width: '40%', }}>
                        <SelectItem
                            title="Select a Program Type"
                            selectItem={(event) => setProgramType(event.target.value)}
                            placeholder="Select a Program Type"
                            data={programTypes}
                        />
                        <button onClick={searchScholarships} className='search-button'>Search Scholarships</button>
                    </div>
                </div>
            </div>
            <div className="uni-container">
                    {universities?.map((uni, ind) => (
                        <div key={ind} className="uni-item">
                            <div className="uni-image-container">
                                <img src={uni?.university?.image } />
                            </div>
                            <div className="uni-details">
                                <div className="uni-details-date">{moment(uni?.deadline).format('MMMM Do YYYY')}</div>
                                <div className="uni-details-title">
                                <a className="detail-link" href={ "university/"+uni?.university?._id}>
                                    {uni?.university?.title}
                                </a>
                                    </div>
                                <div className="uni-details-date">{uni?.details}</div>
                            </div>
                        </div>
                    )) }
                </div>
            <Footer />
            <ToastContainer />
    </>
    )
}
export default ScholarShip