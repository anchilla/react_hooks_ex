import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useReducer, useRef, useMemo} from 'react';

//USEREDUCER
const initialState = {count:0};

function reducer (state, action){
    switch(action.type){
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    }
}

function App(){

    const [state, dispach] = useReducer(reducer, initialState);

    return (
      <>
      Count: {state.count}
      <button onClick = {() => dispach({type: 'decrement'})}>-</button>
      <button onClick = {() => dispach({type: 'increment'})}>+</button>
        </>
      )

}

export default App;

/*
USEREF
function App(){

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return  <div>{count.current}</div>;
}




USEEFFECT
function App(){
  const [count, setCount] = useState(0);

  useEffect = (() => {
    document.tittle = 'You clicked ${count} times';
  }
    );

  return(
      <div>
      <p>You have clicked {count} times</p>
      <button onClick = {() => setCount(count + 1)}> Click me </button>

      </div>
    );
  
}



USESTATE
function App(props) {
  const [count, setRandomCount] = useState(function generateRandomInteger() {
    return Math.floor(Math.random() * 100);
  });
  function clickHandler(e){
    setRandomCount(Math.floor(Math.random() * 100))
  }
  return (
      <div style={{margin: 'auto', width: 100, display: 'block'}}>
      <h1>{count}</h1>

      <p>
      <button onClick={clickHandler}>Count</button>
    </p>
 
    </div>
  );

}

*/