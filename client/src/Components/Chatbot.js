import React,{useState} from 'react'





const Chatbot = (props) => {
    const [chat,setChat] = useState(false)



    return(
        <div className="ChatBoxArea">
            <button onClick={()=>setChat(!chat)}>{!chat ?"Chat":"Close"}</button>
            {
                chat&&(
                    <div className="ChatBox">
                        <div className="ChatboxInput">
                            <input/>
                            <button>Send</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
 

export default Chatbot