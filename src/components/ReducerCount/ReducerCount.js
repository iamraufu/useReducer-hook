import React, { useReducer } from 'react';

const initialState = { count: 0 }
const reducer = (state, action) => {
      switch (action.type) {
            case 'INCREMENT':
                  return { count: state.count + 1 }
            case 'DECREMENT':
                  return { count: state.count - 1 }
            default:
                  return state;
      }
}

const ReducerCount = () => {

      const [state, dispatch] = useReducer(reducer, initialState);
      
      return (

            <div className="container mt-5">
                  <h1>Reducer Count: {state.count}</h1>
                  <button className='btn btn-success mx-5 mt-5' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                  <button className='btn btn-danger mt-5' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            </div>

      );
};

export default ReducerCount;