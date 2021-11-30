import { useRef,useEffect } from "react"; 
const UseRef = () => {
    const labelref = useRef();

    useEffect(() => {
        console.log(labelref.current.textContent);
    })
    return(
        <div className="stateContainer">
            <label ref={labelref}> Label Value </label>
        </div>
    );
}

export default UseRef;