import "./App.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Slider, { Range, createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import React, { useState,useEffect } from "react";
import axios from 'axios';
function App() {
  const [flaskVal, setFlaskVal] = useState(1);
  const [value, setValue] = useState(0);
  useEffect(() => {
    /*const interval = setInterval(() => {
      axios.get(`http://localhost:5000/`)
      .then(res => {
        setFlaskVal(res.data)   
        
      })
      
    }, 1);
    return () => clearInterval(interval);
   */
  })


  const a=()=>{
    axios.get(`http://localhost:5000/a`)
      .then(res => {
        setFlaskVal(res.data)   
        
      })

  }
  const b=()=>{
    axios.get(`http://localhost:5000/b`)
      .then(res => {
        setFlaskVal(res.data)   
        
      })
    
  }
  
  
  

  
  const onSliderChange = (value) => {
    setValue(value);
  };

  const onAfterChange = (value) => {
    console.log(value); //eslint-disable-line
  };

  

  const SliderWithTooltip = createSliderWithTooltip(Slider);
  return (
    <div className="App margin-first-element">
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card">
          <div className="card-header p-3 pt-2">
            <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
              <i className="material-icons opacity-10">person</i>
            </div>
            <div className="text-end pt-1">
              <p className="text-sm mb-0 text-capitalize">Today's Users</p>
              <h4 className="mb-0">2,300</h4>
            </div>
          </div>
          <hr className="dark horizontal my-0" />
          <div className="card-footer p-3">
            <p className="mb-0">
              <span className="text-success text-sm font-weight-bolder">
                +3%{" "}
              </span>
              than lask month
            </p>
          </div>
        </div>
        <div className="margin-progress">
          <CircularProgressbar value={flaskVal*10} text={`${flaskVal*10}%`} />
          <p>{value}</p>
        </div>
        <Slider
          value={value}
          onChange={onSliderChange}
          onAfterChange={onAfterChange}
        />
      </div>
      <button class="button-3" role="button" onClick={a}>Button 3</button>
      <hr/>
      <button class="button-4" role="button"  onClick={b}>Button 4</button>  
    </div>
  );
}

export default App;
