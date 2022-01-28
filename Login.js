/*import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
export default function Login() {
  let navigate = useNavigate();

  const authenticate = () => {
    navigate("/home");
  };

  //===validation

  //=========
  return (
    <div className="container-fluid train  ">
      <div
        className="row  align-items-center justify-content-end"
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6   p-4 ">
          <form>
            <div className="mb-2">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="mb-2">
              <input
                type="button"
                value="Login"
                className="btn btn-lg btn-warning w-100"
                onClick={authenticate}
              />
            </div>

            <div className="text-center mt-1">
              <b>Don't have an account? </b>
              <Link to="/register" className="text-info ">
                Register Here...
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}*/

//================

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

export default function Login() {
  let navigate = useNavigate();
  const authenticate = () => {
    navigate("/home");
  };

  const initialValues = { email: "", password: "" };
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

    /*if (isSubmit) {
      const url = "http://localhost:8080/addUser";
      const body = {
        
        email: formValues.email,
        mob: formValues.mobNo,
        password: formValues.password,
      };
      await axios.post(url, body);
    }*/
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
        className="row  align-items-center justify-content-end"
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6   p-4 ">
          <form onSubmit={handleSubmit}>
            <div className="ui divider"></div>
            <div className="ui form">
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
                  value="Login"
                  className="btn btn-lg btn-warning w-100"
                  onClick={authenticate}
                />
              </div>
              <div className="text-center mt-1">
                <b>Don't have an account? </b>
                <Link to="/register" className="text-info ">
                  Register Here...
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
