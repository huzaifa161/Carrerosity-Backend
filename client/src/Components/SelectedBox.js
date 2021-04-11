import React from 'react'


const SelectedBox = ({props}) => {
    const {fee,display_name,programs,establishment,address} = props
    return(
        <div className="selectedBox">
            <div className="selectedBox-Header">
                <h2>
                    {display_name}
                </h2>
            </div>
            <div className="selectedBox-Details">
            <div className="selectedBox-Details-Row">
                    <h4>
                        Semester Fee
                    </h4>
                    <h6>
                        {fee}
                    </h6>
                </div>
                <div className="selectedBox-Details-Row">
                    <h4>
                        Programs Offered
                    </h4>
                    <h6>
                        {programs}
                    </h6>
                </div>
                <div className="selectedBox-Details-Row">
                    <h4>
                        Established Since
                    </h4>
                    <h6>
                        {establishment}
                    </h6>
                </div>
                <div className="selectedBox-Details-Row">
                    <h4>
                        Address
                    </h4>
                    <h6>
                       {address}
                    </h6>
                </div>

            </div>
        </div>
    )
}


export default SelectedBox