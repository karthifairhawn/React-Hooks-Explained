import { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}


const UseReducerHoook = () => {    
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="stateContainer">
            Count: {state.count}
            <label onClick={() => dispatch({type: 'decrement'})}>-</label>
            <label onClick={() => dispatch({type: 'increment'})}>+</label>
        </div>
     );
}
 
export default UseReducerHoook;