import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeaderText from '../../Components/HeaderText'
import SelectedBox from '../../Components/SelectedBox'
import SelectItem from '../../Components/SelectItem'

const Univeristy_DATA = [
    {
        id: 1,
        name: "DUET",
        display_name: "Dawood UET",
        fee: "30k",
        programs: 13,
        semester: "annual",
        hostel: "none",
        establishment: "1963",
        address: "Main M.A. Jinnah Road,Karachi"
    },
    {
        id: 2,
        name: "MUET",
        display_name: "Mehran UET",
        fee: "28k",
        programs: 24,
        semester: "semester",
        hostel: "yes",
        establishment: "1988",
        address: "Main M.A. Jinnah Road,Karachi"
    },
    {
        id: 3,
        name: "UIT",
        display_name: "Usman Institue",
        fee: "50k",
        programs: 10,
        semester: "semester",
        hostel: "yes",
        establishment: "1999",
        address: "Main M.A. Jinnah Road,Karachi"
    },
    {
        id: 4,
        name: "KIET",
        display_name: "PAF_KIET",
        fee: "60k",
        programs: 13,
        semester: "semester",
        hostel: "yes",
        establishment: "1923",
        address: "Main M.A. Jinnah Road,Karachi"
    }
]


const Camparsion = (props) => {
    const [state, setState] = useState({
        first_id: "",
        second_id: ""
    })
    const handleChange = (name, value) => {
        if (name === 'second_id' && state.first_id === "") {
            alert("Select First University As Well to see the result")
        }
        setState({
            ...state,
            [name]: value,

        });

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
                {console.log(state)}
                <div className="comparsion-items">
                    <div style={{ width: '45%' }}>
                        <SelectItem
                            placeholder="Select First Institute"
                            title="Select First Institute"
                            selectItem={(val) => handleChange("first_id", val.target.value)}
                            data={Univeristy_DATA.filter((item) => item.id != state.second_id)}
                        />
                    </div>
                    <div style={{ width: '45%' }}>
                        <SelectItem
                            placeholder="Select Second Institute"
                            title="Select Second Institute"
                            selectItem={(val) => handleChange("second_id", val.target.value)}
                            data={Univeristy_DATA.filter((item) => item.id != state.first_id)} />
                    </div>

                </div>
                <div className="comparsion-boxes">
                    <div style={{ width: '45%' }}>
                        {state.first_id && <SelectedBox props={Univeristy_DATA.find(university => university.id == state.first_id)} />}
                    </div>
                    <div style={{ width: '45%' }}>
                        {state.first_id && state.second_id && <SelectedBox props={Univeristy_DATA.find(university => university.id == state.second_id)} />}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
export default Camparsion