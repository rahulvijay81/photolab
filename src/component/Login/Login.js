import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { FirebaseContext } from "../../store/Context";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase/Config";
import { signInWithPopup } from "firebase/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../Style.scss";

function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleFormSubmit = (values) => {
    const { email, password } = values;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        localStorage.setItem("email", data.user.email);
        console.log("signup successful");
        navigate("/home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      formik.setValues({ ...values, email });
    }
  }, [formik, values]);

  return (
    <div className="bg-login">
      <div className="flex-container">
        <div className="flexbox1">
          <div className="loginimg" />
        </div>
        <div className="flexbox2">
          <div className="login-box">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail</label>
              <div className="input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && touched.email && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.password}
                </p>
              )}
              <label htmlFor="password">Password</label>
              <div className="input">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && touched.password && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.password}
                </p>
              )}
              <button className="login-btn" type="submit">
                Login
              </button>
              <p>or</p>
              <button onClick={handleGoogleSignIn} className="signup-btn">
                <FcGoogle
                  style={{
                    width: "20px",
                    height: "20px",
                    paddingRight: "10px",
                  }}
                />
                Sign-in with Google
              </button>
              <br />
              <p className="create-btn">
                Don't have an account?
                <span
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
