import Button from "./comps/HookButton";

function App() {
  return(
        <>
          <div className="container">
            <h1>React  Hooks</h1>

            <div className="hook-container">
              <Button name="useState" />
              <Button name="useEffect" />
              <Button name="useReducer" />
              <Button name="UseRef" />
              <Button name="UseLayoutEffect" />
              <Button name="UseImperativeHandle" />
              <Button name="UseContext" />
              <Button name="UseMemo" />
              <Button name="UseCallback" />
            </div>
            

          </div>
        </>
  );
}

export default App;
