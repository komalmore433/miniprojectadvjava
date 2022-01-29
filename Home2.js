import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import "./hom2.css";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

const Home2 = () => {
  let navigate = useNavigate();
  const authenticate1 = () => {
    navigate("/addcourse");
  };
  const authenticate2 = () => {
    navigate("/allcourses");
  };
  return (
    <div>
      <div className="container-fluid colorsa ">
        <div className="row    m-3 ">
          <div className="col">
            <center>
              <h1 className=" text-warning"> Online Train Booking</h1>
              <h3 className=" text-light">Admin Page</h3>
            </center>
          </div>
        </div>

        <div className="m-5 row">
          <input
            type="button"
            value="Add Train"
            className="btn btn-lg btn-warning w-100"
            onClick={authenticate1}
          />
        </div>
        <div className="m-5 row">
          <input
            type="button"
            value="All Train"
            className="btn btn-lg btn-warning w-100"
            onClick={authenticate2}
          />
        </div>

        <div className="m-0 row">
          <h5 className="text-center">Thank you for visit out site!!!</h5>
        </div>
      </div>
    </div>
  );
};

export default Home2;
