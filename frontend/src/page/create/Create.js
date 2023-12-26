import React, { useState } from "react";
import "./Create.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Create() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/Create", { name, phone, email })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="AddStudents">
        <h1>Add Students</h1>
        <Link to="/" className="backButton">
          Back
        </Link>
        <div className="formS">
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              placeholder="Username"
              required=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {/* <h1>{name}</h1> */}
            <input
              type="tel"
              placeholder="Your phone"
              required=""
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Your email"
              required=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
