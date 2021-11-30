import { useState } from 'react';
import { useEffect } from 'react';
const UseEffectHook = () => {

    const [name, setName] = useState("Label Value");

    useEffect(() => {
        console.log(name);
        setName("Karthi");
    },[])

    return (                
        <div className="stateContainer">
            <label> {name} </label>
        </div>
    );
}

export default UseEffectHook;