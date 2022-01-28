/*cd*/

/*import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  //let empData = null;
  const [empData, setEmpData] = useState({});
  
  function fetchEmpData() {
    axios.get("http://localhost:8080/emp2").then((response) => {
      //alert(response.data);
      //alert(JSON.stringify(response.data));
      setEmpData(response.data);
    })
  }

  useEffect(fetchEmpData);

  return (
    <div className="App">
      <h1>Hello Everyone!</h1>
      <p>
        Empno : {empData.empno} <br />
        Name : {empData.name} <br />
        Salary : {empData.salary} <br /> 
      </p>
    </div>
  );
}

export default App;*/

//----------------Project-----------

import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import BookTrain from "./BookTrain";
import Home from "./Home";
import TrainAvailability from "./TrainAvailability";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/home" element={<Home />} />
        <Route path="/booktrain" element={<BookTrain />} />
        <Route path="/checktrain" element={<TrainAvailability />} />
      </Routes>
    </>
  );
}
