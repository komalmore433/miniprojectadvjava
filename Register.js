/*import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

export default function Register() {
  let navigate = useNavigate();

  const authenticate = () => {
    navigate("/home");
  };

  const initialValues = { firstName: "", lastName: "", email: "", mobile: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex1 = /[3-9]/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!regex1.test(values.password)) {
      errors.password =
        "your password should have more than 3 digits and less than 9 digits";
    }
    return errors;
  };
  return (
    <div className="container-fluid train">
      <div
        className="row justify-content-end align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6  p-4 rounded">
          <form className="">
            <div className="alert  text-center h2">Registration Form</div>

            <div>
              <label>First Name</label>
              <input
                className="form-control "
                type="text"
                placeholder="Enter FirstName"
                value={formValues.firstName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.firstName}</p>
            <div className="mt-1">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter LastName"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.lastName}</p>
            <div className="mt-1">
              <label>Email</label>
              <input
                className="form-control "
                type="email"
                placeholder="Enter Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="mt-1">
              <label>Mobile </label>
              <input
                className="form-control "
                type="number"
                placeholder="Enter Mobile"
                value={formValues.mobile}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.mobile}</p>
            <div className="mt-3">
              <input
                type="button"
                value="Register"
                className="btn btn-warning w-100 btn-lg"
              />
            </div>

            <div className="text-center">
              <b>If you already have an account, just </b>
              <Link to="/login" className="text-info">
                Login here..
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}*/

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();

  const authenticate = () => {
    navigate("/login");
  };
  const initialValues = { username: "", email: "", password: "", mobNo: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (isSubmit) {
      const url = "http://localhost:8080/addUser";
      const body = {
        username: formValues.username,
        email: formValues.email,
        mob: formValues.mobNo,
        password: formValues.password,
      };
      await axios.post(url, body);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex1 = /[3-9]/;

    const regex2 = /^((\+)?(\d{2}[-]))?(\d{10}){1}?$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.mobNo) {
      errors.mobNo = "mobNo is required!";
    } else if (!regex2.test(values.mobNo)) {
      errors.mobNo = "This is not a valid mobNo format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!regex1.test(values.password)) {
      errors.password =
        "your password should have more than 3 digits and less than 9 digits";
    }
    return errors;
  };

  return (
    <div className="container-fluid  p-0 m-0 colors">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Registered in successfully</div>
      ) : (
        <p></p>
      )}

      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 col-md-6 ">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">Registration</h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.username}</p>
              <div className="field">
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="field">
                <label>Mobile</label>
                <input
                  className="form-control"
                  type="tel"
                  name="mobNo"
                  placeholder="Mobile number"
                  value={formValues.mobNo}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.mobNo}</p>
              <div className="field">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>

              <div className="mb-2">
                <input
                  type="button"
                  value="Register"
                  className="btn btn-lg btn-warning w-100"
                  onClick={authenticate}
                />
              </div>
              <div className="text-center">
                <b>If you already have an account, just </b>
                <Link to="/login" className="text-info">
                  Login here..
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
