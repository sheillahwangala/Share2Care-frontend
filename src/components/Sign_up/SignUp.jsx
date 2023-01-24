import React, { useState } from "react";
import "./././sign_up.css"; // import the CSS file
import { useNavigate } from "react-router-dom";

function SignUp() {
  // ...
    const [values, setValues] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("/api/v1/signup", {
        method: "POST",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          role: values.role,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            navigate("/login");
          } else {
            console.log(data.errors);
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <div className="signup__form">
      <input
        className="signup__inputs user__firstName"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={values.firstName}
        onChange={(e) => setValues({ ...values, firstName: e.target.value })}
      />
      <input
        className="signup__inputs user__lastName"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={values.lastName}
        onChange={(e) => setValues({ ...values, lastName: e.target.value })}
      />
      <input
        className="signup__inputs user__email"
        type="text"
        name="email"
        placeholder="email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <input
        className="signup__inputs user__password"
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <select
        className="signup__inputs user__role"
        name="role"
        value={values.role}
        onChange={(e) => setValues({ ...values, role: e.target.value })}
      >
        <option value="Admin">Admin</option>
        <option value="Farmer">Farmer</option>
        <option value="Consumer">Consumer</option>
      </select>
      <button className="signup__btn" type="submit" onClick={handleSubmit}>
        Sign Up
      </button>
    </div>
  );
}
export default SignUp;
