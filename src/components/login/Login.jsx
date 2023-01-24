import { useState } from "react";
import "./././login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          const role = data.user.role;
          if (role === "Admin") {
            navigate("/admins");
          } else if (role === "Farmer") {
            navigate("/farmers");
          } else if (role === "Consumer") {
            navigate("/consumers");
          }
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
    <div className="login__form">
      <input
        className="login__inputs user__email"
        type="text"
        name="email"
        placeholder="email"
        value={values.email}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
      />
      <input
        className="login__inputs user__password"
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <button className="login__btn" type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}
export default Login;
