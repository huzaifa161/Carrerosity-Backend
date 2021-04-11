import React,{useState} from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import SelectItem from '../../Components/SelectItem'
import HeaderText from '../../Components/HeaderText'
import UniversityItem from '../../Components/UniversityItem'




const UniversityData = [
    {
        id:1,
        city_id:2,
        course_id:1,
        date:"03-August-2021",
        name:"Institute of Space and Technology",
    },
    {
        id:2,
        city_id:1,
        course_id:1,
        date:"22-September-2021",
        name:"Dawood UET",
    },
    {
        id:3,
        city_id:1,
        course_id:1,
        date:"23-October-2021",
        name:"PAF_KIET",
    },
    {
        id:4,
        city_id:1,
        course_id:2,
        date:"03-August-2021",
        name:"Islamia College Karachi",
    },
    {
        id:5,
        city_id:1,
        course_id:2,
        date:"03-July-2021",
        name:"Delhi College",
    },
]






const PROGRAM = [
    {
        id:1,
        name:"UNIVERSITY"
    },
    
    {
        id:2,
        name:"COLLEGE"
    }
    ,
    {
        id:3,
        name:"SCHOOL"
    },
]






const CITY = [
    {
        id: 1,
        name: "Karachi"
    },
    {
        id: 2,
        name: "Islamabad"
    },
    {
        id: 3,
        name: "Lahore"
    },
    {
        id: 4,
        name: "Peshawar"
    },
    {
        id: 5,
        name: "RawalPindi"
    },
]


const Admission = (props) => {
    
    const [data,setdata] = useState(UniversityData)


    // const [state,setState] = useState({
    //     location:"",
    //     degree:""
    // })
    const [location,setLocation] = useState("")
    const [degree,setDegree] = useState("")





const onChange =  (type,id) =>{
    if(type==="city_id"){
        setLocation(id)
    }
    else{
        setDegree(id)
    }
    if(type==='city_id' && !!degree){
        setdata(UniversityData.filter(item=>item.city_id==id&&item.course_id==degree))
    }
    else if(type==='course_id' && !!location ){
        setdata(UniversityData.filter(item=>item.city_id==location&&item.course_id==id))
    }
    else{
        setdata(UniversityData.filter((item)=>item[type]==id))
    }
    
    // setdata(data.find((item)=>item[type]===id))
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
                <div class="admission-header">
                    <div style={{ width: '40%', }}>
                        <SelectItem
                            title="Select City"
                            selectItem={(id) => onChange("city_id",id.target.value)}
                            placeholder="Select a City"
                            data={CITY}
                        />
                    </div>
                    <div style={{ width: '40%', }}>
                        <SelectItem
                            title="Select a Institute Type"
                            selectItem={(id) => onChange("course_id",id.target.value)}
                            placeholder="Select a Institute Type"
                            data={PROGRAM}
                        />
                    </div>
                </div>
                <div className="admission-title">
                    <HeaderText rtl
                        headingLeft="Open"
                        headingRight="Admissions"
                        paragraph=""
                    />
                </div>
                <div style={{width:'80%',margin:'auto',flexDirection:'row',display:'flex',flexWrap:'wrap'}}>
                    
                    {data.length?data.map((university)=> {return <UniversityItem {...university} />}):"No Admissions found!"}
                </div>

            
            
            
            
            
            
            
            
            </div>
            <Footer />
        </>
    )
}
export default Admission