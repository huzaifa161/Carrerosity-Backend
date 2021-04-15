import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeaderText from '../../Components/HeaderText'
import { ToastContainer, toast } from 'react-toastify';
import SelectItem from '../../Components/SelectItem'

// const Univeristy_DATA = [
//     {
//         id: 1,
//         name: "DUET",
//         display_name: "Dawood UET",
//         fee: "30k",
//         programs: 13,
//         semester: "annual",
//         hostel: "none",
//         establishment: "1963",
//         address: "Main M.A. Jinnah Road,Karachi"
//     },
//     {
//         id: 2,
//         name: "MUET",
//         display_name: "Mehran UET",
//         fee: "28k",
//         programs: 24,
//         semester: "semester",
//         hostel: "yes",
//         establishment: "1988",
//         address: "Main M.A. Jinnah Road,Karachi"
//     },
//     {
//         id: 3,
//         name: "UIT",
//         display_name: "Usman Institue",
//         fee: "50k",
//         programs: 10,
//         semester: "semester",
//         hostel: "yes",
//         establishment: "1999",
//         address: "Main M.A. Jinnah Road,Karachi"
//     },
//     {
//         id: 4,
//         name: "KIET",
//         display_name: "PAF_KIET",
//         fee: "60k",
//         programs: 13,
//         semester: "semester",
//         hostel: "yes",
//         establishment: "1923",
//         address: "Main M.A. Jinnah Road,Karachi"
//     }
// ]


const Camparsion = (props) => {
    const [university1, setUniversity1] = useState(null);
    const [university2, setUniversity2] = useState(null);
    const [universities, setUniversities] = useState([]);
    const [universityDetails, setUniversityDetails] = useState([]);
    const ref = useRef();

    useEffect(() => {
        getUniversities();
    }, []);

    const getUniversities = async () => {
        try {
            const response = await axios.get('university/');
            if (response?.data?.statusCode === 200) {
                setUniversities(response?.data?.Data)
            }
        } catch (err) {
            
        }
    }


    const compareUniversities = async () => {
        if (!university1 || !university2) return toast.error('Please Select both universities...!');
        if (university1 === university2) return toast.error('Please Select different universities...!');
        try {
            const response = await axios.get(`university/compare/${university1}/${university2}`)
            if (response?.data?.statusCode === 200) {
                const uni1 = response?.data?.Data.find(uni => uni?._id === university1);
                const uni2 = response?.data?.Data.find(uni => uni?._id === university2);
                setUniversityDetails([uni1, uni2]);
            }

        } catch (err) {
            
        }
     }

    const handleChange = (value) => {
        setUniversity1(value)
    }
    return (
        <>
            <Header />
            <div className="comparision">
                <div className="comparisionHeader">
                    <HeaderText
                        headingLeft="Compare"
                        headingRight="Institutes"
                        paragraph="Narrow down your favourite institutes and compare them side by side with our built-in tools"
                    />
                </div>
                <div className="comparsion-items">
                    <div style={{ width: '45%' }}>
                        <SelectItem
                            placeholder="Select First Institute"
                            title="Select First Institute"
                            selectItem={(event) => setUniversity1(event.target.value)}
                            data={universities}
                        />
                    </div>
                    <div style={{ width: '45%' }}>
                        <SelectItem
                            placeholder="Select Second Institute"
                            title="Select Second Institute"
                            selectItem={(event) => setUniversity2(event.target.value)}
                            data={universities} 
                        />
                    </div>
                </div>
                <div className="comparsion-items">
                    <button onClick={compareUniversities} className="compare-button">Compare</button>
                </div>
                <div className="comparsion-items">
                    {universityDetails.length ? <div className="university-details">
                        <div className="detail-key h-160">Description</div>
                        <div className="detail-key h-60">City</div>
                        <div className="detail-key h-60">Email</div>
                        <div className="detail-key h-60">Phone</div>
                        <div className="detail-key h-60">Auditorium</div>
                        <div className="detail-key h-60">Wifi</div>
                        <div className="detail-key h-60">Science Labs</div>
                        <div className="detail-key h-60">Computer Labs</div>
                        <div className="detail-key h-60">Library</div>
                        <div className="detail-key h-60">Cafeteria</div>
                        <div className="detail-key h-60">Gymnasium</div>
                        <div className="detail-key h-60">Indoor Sports</div>
                        <div className="detail-key h-60">Outdoor Sports</div>
                        <div className="detail-key h-60">Swimming Pool</div>
                        <div className="detail-key h-60">Transport</div>
                    </div>: null}
                    {universityDetails.length ? universityDetails?.map(uni => (
                        <div key={uni?._id} className="university-details">
                            <div className="uni-title h-160">
                                <img src={uni?.image} /> {uni?.title}
                            </div>
                            <div className="uni-title h-60">Karachi</div>
                            <div className="uni-title h-60">{uni?.email}</div>
                            <div className="uni-title h-60">{uni?.phoneNumber}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.auditorium ? 'Yes' : 'N/A'}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.wifi ? 'Yes' : 'N/A'}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.scienceLabs ? 'Yes' : 'N/A'}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.computerLabse ? 'Yes' : 'N/A'}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.library ? 'Yes' : 'N/A'}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.cafeteria ? 'Yes' : 'N/A'}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.gymnasium ? 'Yes' : 'N/A'}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.indoorSports ? 'Yes' : 'N/A'}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.outdoorSports ? 'Yes' : 'N/A'}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.swimmingPool ? 'Yes' : 'N/A'}</div>
                            <div className="uni-title h-60">{uni?.campusFacilities?.transport ? 'Yes' : 'N/A'}</div>
                        </div>

                        )
                    ): null}
                    </div>


                {/* <div className="comparsion-boxes">
                    <div style={{ width: '45%' }}>
                        {state.first_id && <SelectedBox props={Univeristy_DATA.find(university => university.id == state.first_id)} />}
                    </div>
                    <div style={{ width: '45%' }}>
                        {state.first_id && state.second_id && <SelectedBox props={Univeristy_DATA.find(university => university.id == state.second_id)} />}
                    </div>

                </div> */}
            </div>
            <ToastContainer ref={ref} />
            <Footer />
        </>
    )
}
export default Camparsion