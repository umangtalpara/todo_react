// import logo from './logo.svg';
import React ,{useState} from 'react';
import './App.css';


const App = () => {
// const state = useState();
const [count,setCount] = useState(0);

const IncNum = () => {
  setCount(count +1);
  // console.log( "clicked " + count++);
};
  setInterval(IncNum,1000);
  return (
    <>
      <h1 className="header_style">hello umang </h1>
      <h2>Date {new Date().toLocaleTimeString()}.</h2>
      <div >
      {/* <h1> {count} </h1> */}
      {/* <button onClick={IncNum}> click me </button> */}
      </div>
    </>
  );
  };


export default App;
