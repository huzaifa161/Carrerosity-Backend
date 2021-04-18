import React,{useEffect, useState} from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import SelectItem from '../../Components/SelectItem'
import HeaderText from '../../Components/HeaderText'
import axios from 'axios'
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';



const Admission = (props) => {
    
    const [programType,setProgramType] = useState('')
    const [programTypes,setProgramTypes] = useState([])
    const [universities, setUniversities] = useState([]);


    useEffect(() => {
        fetchProgramTypes();
        fetchAdmissionUniversities();
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
    const fetchAdmissionUniversities = async(id = null) => {
        try {
            const programTypeId = id ? '/' + id : '';
            const res = await axios.get(`university/admissions${programTypeId}`);
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

    const searchAdmissions = async () => {
        if (!programType) return toast.warn('Please Select Program Type');
        await fetchAdmissionUniversities(programType)
    }


    return (
        <>
            <Header />
            <div className="admission">
                <div className="admission-title">
                    <HeaderText
                        headingLeft="Search"
                        headingRight="Admissions"
                        paragraph="Narrow down your favourite institutes and compare them side by side with our built-in tools"
                    />
                </div>
                <div className="admission-header">
                    <div style={{ width: '40%', }}>
                        <SelectItem
                            title="Select a Program Type"
                            selectItem={(event) => setProgramType(event.target.value)}
                            placeholder="Select a Program Type"
                            data={programTypes}
                        />
                        <button onClick={searchAdmissions} className='search-button'>Search Admissions</button>
                    </div>
                </div>
                <div className="admission-title">
                    <HeaderText rtl
                        headingLeft="Open"
                        headingRight="Admissions"
                        paragraph=""
                    />
                </div>
                <div className="uni-container">
                    {universities?.map((uni, ind) => (
                        <div key={ind} className="uni-item">
                            <div className="uni-image-container">
                                <img src={uni?.university?.image } />
                            </div>
                            <div className="uni-details">
                                <div className="uni-details-date">{moment(uni?.lastDate).format('MMMM Do YYYY')}</div>
                                <div className="uni-details-title">{uni?.university?.title}</div>
                                <div className="uni-details-date">{uni?.details}</div>
                            </div>
                        </div>
                    )) }
                </div>

            </div>
            <Footer />
            <ToastContainer />
        </>
    )
}
export default Admission