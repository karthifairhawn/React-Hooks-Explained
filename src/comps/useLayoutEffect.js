import { useLayoutEffect, useEffect } from 'react';

const UseLayoutEffect = () => {    

    useEffect(()=>{
        console.log("Messafe by Use Effect");
    })

    useLayoutEffect(()=>{
        console.log("Messafe by Use Layout Effect");
    })

    return(
        <div className="stateContainer">
            <label> Use Layout Effect </label>
        </div>
    );
}

export default UseLayoutEffect;