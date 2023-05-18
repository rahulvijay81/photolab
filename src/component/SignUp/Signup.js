import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../store/Context";
import PasswordChecklist from 'react-password-checklist'
import "../../Style.scss";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setErrors({ allFieldsRequired: "All fields are required" });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrors({ invalidEmail: "Invalid email address" });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase
            .firestore()
            .collection("users")
            .add({
              id: result.user.uid,
              username: username,
            })
            .then(() => {
              navigate("/");
            });
        });
      })
      .catch((error) => {
        setErrors({ signupError: error.message });
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <div className="brandName" style={{ textAlign: "center" }}>
          Photo Lab
        </div>
        {Object.keys(errors).length > 0 && (
          <p style={{ color: "red" }}>
            {Object.values(errors).map((error) => (
              <span key={error}>{error}</span>
            ))}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <div className="input">
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="fname"
              name="name"
            />
          </div>
        
          <label htmlFor="fname">Email</label>
          <div className="input">
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="fname"
              name="email"
            />
          </div>

          <label htmlFor="lname">Password</label>
          <div className="input">
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="lname"
              name="password"
            />
          </div>
          <br />
          <PasswordChecklist
            rules={["minLength"]}
            minLength={10}
            value={password}
            valueAgain={password}
            onChange={(isValid) => {}}
            className="custom-password-checklist"
          />

          <button className="btn-signup" type="submit">
            Signup
          </button>
        </form>
        <p
          className="bac"
          onClick={() => {
            navigate("/");
          }}
        >
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
}
