import { useState } from "react";

const UseStateHook = () => {


    const [Myname, setMyName] = useState("LabelValue");
    
    return ( 
        <div className="stateContainer">
            <input type="text" onChange={ (event) => setMyName(event.target.value)}/>
            <label>{ Myname }</label>
        </div>
     );
}
 
export default UseStateHook;